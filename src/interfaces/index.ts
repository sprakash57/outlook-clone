export interface IMails {
    id: string,
    title: string,
    desc: string,
    archived: boolean,
    recent: boolean,
    replies: string[]
}

export interface IAuth {
    isAuthenticated: boolean,
    message: string,
    status: number
}

export interface IText {
    placeholder: string,
    type: string,
    name: string,
}

export interface IReducer {
    mails: IMails[],
    authData: IAuth,
    deleted: boolean
}

export interface IState {
    reducer: IReducer
}