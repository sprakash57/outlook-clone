import { LOGIN, LOAD_MAILS, LOGOUT, DELETE } from "../constants";
import { combineReducers } from "redux";

const initState = {
    mails: [],
    authData: { isAuthenticated: false, message: '', status: 500 },
    deleted: false
}

const reducer = (state = initState, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN:
        case LOGOUT:
            return { ...state, authData: payload }
        case LOAD_MAILS:
            return { ...state, mails: payload }
        case DELETE:
            return { ...state, mails: payload, deleted: !state.deleted }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    reducer
});

export default rootReducer;