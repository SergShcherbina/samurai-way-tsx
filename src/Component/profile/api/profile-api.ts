import {instance} from "../../../common/common-api/common-api";
import {ResultCode} from "../../../common/enums/emuns";

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ResponseProfileType>(`profile/${userId}`).then((res) => res.data);
    },
    getStatus(userId: number) {
        return instance.get<string>(`/profile/status/${userId}`).then((res) => res);
    },
    updateStatus(status: string) {
        return instance.put<string>(`/profile/status`, {status}).then((res) => res);
    },
    replaceFile(file: File) {
        const formData = new FormData()   //для передачи файла на сервер
        formData.append('image', file)
        return instance.put<ResponseFileType>(`/profile/photo`, formData,
            {headers: {'Content-Type': 'multipart/form-data'}}) //так как формат не json меняем заголовки
            .then((res) => res.data);
    },
};

export type ResponseProfileType = {
    boutMe: string
    contacts: ContactsProfileType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: null
    photos: ResponsePhotoType
    userId: number
}
type ContactsProfileType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string
}

type ResponseFileType = {
    data: { photos: ResponsePhotoType }
    fieldsErrors: []
    messages: []
    resultCode: ResultCode
}

export type ResponsePhotoType = {
    large: string
    small: string
}