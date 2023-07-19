import axios from "axios";
import {instance} from "../common/common-api/common-api";
import {ResultCode} from "../common/enums/emuns";

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((res) => {
                return res.data
            });
    },
    followUser(userId: number) {
        return instance.delete(`follow/${userId}`).then((res) => res.data);
    },
    unFollowUser(userId: number) {
        return instance.post(`follow/${userId}`).then((res) => res.data);
    },
};

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`).then((res) => res);
    },
    setLogin({email, password, rememberMe}: LoginType) {
        return instance.post(`/auth/login`, {email, password, rememberMe}).then((res) => res);
    },
    setLogout() {
        return instance.delete(`/auth/login`).then((res) => res);
    },
};

export type LoginType = {
    email: string;
    password: string;
    rememberMe: boolean;
};

type UsersResponseType = {
    data: AuthType
    messages: string[],
    fieldsErrors: string[],
    resultCode: number
}

type AuthType = {
    id: 28520,
    login: string,
    email: string
}

