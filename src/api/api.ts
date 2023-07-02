import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2c9579b3-006a-4fe2-ae79-36894f3fae6b'
    },
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    followUser(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data)
    },
    unFollowUser(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(res => res.data)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get(`/profile/status/${userId}`)
            .then(res => res)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status`, {status})
            .then(res => res)
    }
}

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(res => res)
    },
    setLogin({email, password, rememberMe}: LoginType) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
            .then(res => res)
    },
    setLogout() {
        return instance.delete(`/auth/login`)
            .then(res => res)
    }
}

export type LoginType = {
    email: string
    password: string
    rememberMe: boolean
}