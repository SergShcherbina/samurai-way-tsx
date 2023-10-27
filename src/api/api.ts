import {instance} from "../common/common-api/common-api";
import {UserType} from "../Component/users/model/users-reducer";

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then((res) => {
                return res.data
            });
    },
    getFriends(page: number = 1, value: string = '') {
        return instance.get<UsersResponseType>(`users?friend=true&page=${page}&term=${value}`)
            .then((res) => {
                return res.data
            });
    },
    // searchUser(value: string = '', isFriend: boolean) {
    //     return instance.get<UsersResponseType>(`users?term=${value}&friend=${isFriend}`)
    //         .then(res => {
    //             return res.data
    //         })
    // },
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
    error: null | string
    items: UserType[]
    totalCount: number
}

type AuthType = {
    id: 28520,
    login: string,
    email: string
}

