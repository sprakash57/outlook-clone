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
    authData: IAuth
}

export interface IState {
    reducer: IReducer
}

export interface IMailItem {
    mail: IMails,
    onSelect(id: string): void
}