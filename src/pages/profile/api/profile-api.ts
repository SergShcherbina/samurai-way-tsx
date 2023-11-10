import {instance} from "../../../common/common-api/common-api";
import {ResponseFileType, ResponseProfileType} from "../model/profile-types";
import {AxiosResponse} from "axios";

export const profileAPI = {
    getProfile: async (userId: number) => {
        return await instance.get<ResponseProfileType>(`profile/${userId}`)
            .then(res => res.data);
    },
    getStatus: async (userId: number) => {
        return await instance.get<string>(`/profile/status/${userId}`);
    },
    updateStatus: async (status: string) => {
        return await instance.put<ResponseFileType>(`/profile/status`, {status});
    },
    replaceFile: async (file: File) => {
        const formData = new FormData()   //для передачи файла на сервер
        formData.append('image', file)

        return await instance.put<ResponseFileType>(`/profile/photo`, formData,
            {headers: {'Content-Type': 'multipart/form-data'}}) //так как формат не json меняем заголовки
            .then((res) => res.data);
    },
    updateProfile: async (info: ResponseProfileType) => {
        return await instance.put<ResponseFileType>(`/profile`, info)
            .then(res => res.data)
    }
};
