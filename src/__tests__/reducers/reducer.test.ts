import reducer from '../../reducers';
import { LOAD_MAILS, LOGIN, LOGOUT } from '../../constants';

const initState = {
    mails: [],
    authData: { isAuthenticated: false, message: '', status: 500 }
}


describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            reducer: initState
        })
    })

    it('should handle LOAD_MAILS', () => {
        const mails = [{ id: '1', title: 'title', desc: 'desc' }]
        expect(
            reducer({ reducer: initState }, {
                type: LOAD_MAILS,
                payload: mails
            })
        ).toEqual({ reducer: { ...initState, mails } })
    })

    it('should handle LOGIN', () => {
        const authData = { isAuthenticated: true, message: 'Logged in', status: 200 }
        expect(
            reducer({ reducer: initState }, {
                type: LOGIN,
                payload: authData
            })
        ).toEqual({ reducer: { ...initState, authData } })
    })

    it('should handle LOGOUT', () => {
        const authData = { isAuthenticated: true, message: 'Logged out', status: 200 }
        expect(
            reducer({ reducer: initState }, {
                type: LOGOUT,
                payload: authData
            })
        ).toEqual({ reducer: { ...initState, authData } })
    })
})