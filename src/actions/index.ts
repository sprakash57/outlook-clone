import { URL, LOGIN, LOGOUT } from "../constants"
import { IAuth } from "../interfaces";

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