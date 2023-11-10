import {instance} from "../../../common/common-api/common-api";
import {ResponseFollowType, UsersResponseType} from "../model/users-types";
import {AxiosResponse} from "axios";

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, valueSearch: string = '') {
        return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}&term=${valueSearch}`)
            .then((res) => res.data);
    },
    getFriends(page: number = 1, value: string = '') {
        return instance.get<UsersResponseType>(`users?friend=true&page=${page}&term=${value}`)
            .then((res) => res.data);
    },
    unFollowUser(userId: number) {
        return instance.delete<ResponseFollowType>(`follow/${userId}`)
            .then((res) => res.data);
    },
    followUser(userId: number) {
        return instance.post<ResponseFollowType>(`follow/${userId}`)
            .then((res) => res.data);
    },
};