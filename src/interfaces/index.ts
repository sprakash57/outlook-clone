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