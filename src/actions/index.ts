import { URL, LOGIN, LOGOUT, LOAD_MAILS } from "../constants"
import { IAuth, IMails } from "../interfaces";

export const login = (email: string, password: string) => async (dispatch: any) => {
    let response: IAuth;
    try {
        const buffer = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        response = await buffer.json();
    } catch (error) {
        response = { isAuthenticated: false, message: 'Internal Server Error', status: 500 }
    }
    dispatch({ type: LOGIN, payload: response });
}

export const logout = () => (dispatch: any) => {
    dispatch({ type: LOGOUT, payload: { isAuthenticated: false, message: 'Logged out successfully', status: 200 } })
}

export const fetchMails = () => async (dispatch: any) => {
    let response: IMails[];
    try {
        const buffer = await fetch(URL);
        response = await buffer.json();
        dispatch({ type: LOAD_MAILS, payload: response });
    } catch (error) {
        console.log(error);
    }
}

export const reply = (text: string, id: number) => (dispatch: any, getState: any) => {
    const { reducer: { mails } } = getState();
    mails[id].replies.unshift(text);
    dispatch({ type: LOAD_MAILS, payload: mails });
}

export const deleteMail = (id: string) => (dispatch: any, getState: any) => {
    let { reducer: { mails } } = getState();
    mails = mails.filter((mail: IMails) => mail.id !== id);
    dispatch({ type: LOAD_MAILS, payload: mails });
}

export const archiveMail = (id: string) => (dispatch: any, getState: any) => {
    let { reducer: { mails } } = getState();
    mails[+id].archived = !mails[+id].archived
    dispatch({ type: LOAD_MAILS, payload: mails });
}
