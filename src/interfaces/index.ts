export interface IMails {
    id: string,
    title: string,
    desc: string,
    archived: boolean,
    recent: boolean
}

export interface IAuth {
    isAuthenticated: boolean,
    message: string,
    status: number
}

export interface IText {
    value: string,
    placeholder: string,
    type: string,
    name: string,
    onChange(e: React.FormEvent<HTMLInputElement>): void,
}

export interface IReducer {
    mails: IMails[],
    authData: IAuth
}

export interface IState {
    reducer: IReducer
}