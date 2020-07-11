import { LOGIN, LOAD_MAILS, LOGOUT } from "../constants";
import { combineReducers } from "redux";

const initState = {
    mails: [],
    authData: { isAuthenticated: false, message: '', status: 500 }
}

const reducer = (state = initState, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN:
        case LOGOUT:
            return { ...state, authData: payload }
        case LOAD_MAILS:
            return { ...state, mails: payload }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    reducer
});

export default rootReducer;