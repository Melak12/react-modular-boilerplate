import { UserAccount } from "../auth.types";

export const setAuthSession = (user: UserAccount, token: string) => {
    localStorage.setItem("APP_USER", JSON.stringify(user));
    localStorage.setItem("APP_TOKEN", token);
}

export const getUserFromSession = (): UserAccount|null => {
    const userStr = localStorage.getItem('APP_USER');
    let user: UserAccount|null = null;
    if (userStr) {
        user = JSON.parse(userStr);
    }
    return user;
}

export const getAuthToken = ():string|null => {
    return localStorage.getItem('APP_TOKEN');
}

export const endAuthSession = () => {
    localStorage.removeItem('APP_USER');
    localStorage.removeItem('APP_TOKEN');
}

export const isLoggedIn = () => {
    return getAuthToken();
}