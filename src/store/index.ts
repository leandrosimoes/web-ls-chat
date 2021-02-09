import { ILsChatUser } from "../interfaces";

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('lschatuser') || '{}')
}

export const setCurrentUser = (user: ILsChatUser) => {
    localStorage.setItem('lschatuser', JSON.stringify(user || {}))
}