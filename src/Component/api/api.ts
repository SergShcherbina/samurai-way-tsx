import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL:  'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2c9579b3-006a-4fe2-ae79-36894f3fae6b'
    },
})

export const getAPI = {
    getUsers(currentPage: number, pageSize: number){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(res => res.data)
    },
    getCurrentPage(pageNumber:number, pageSize: number){
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
                .then(res=>res.data)
    },
    getAuthMe(){
        return instance.get(`auth/me`)
            .then(res=>res.data)
    },
    getUser(userId: number){
        return instance.get(`profile/${userId}`)
            .then(res=>res.data)
    },
    followUser(userId: number){
        return instance.delete(`follow/${userId}`)
            .then(res=>res.data)
    },
    unFollowUser(userId: number){
        return instance.post(`follow/${userId}`)
            .then(res=>res.data)
    }
}
