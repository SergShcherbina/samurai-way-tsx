import {instance} from "../../../common/common-api/common-api";
import {UsersResponseType} from "../model/users-types";

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, valueSearch: string = '') {
        return instance
            .get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}&term=${valueSearch}`)
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
    unFollowUser(userId: number) {
        return instance.delete(`follow/${userId}`).then((res) => res.data);
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`).then((res) => res.data);
    },
};