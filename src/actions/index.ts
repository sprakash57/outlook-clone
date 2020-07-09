import { URL, LOGIN, LOGOUT, FETCH_MAILS } from "../constants"
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
        dispatch({ type: FETCH_MAILS, payload: response });
    } catch (error) {
        console.log(error);
    }
}