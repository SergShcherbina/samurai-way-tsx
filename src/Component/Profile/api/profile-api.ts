import {instance} from "../../../common/common-api/common-api";

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileResponseType>(`profile/${userId}`).then((res) => res.data);
    },
    getStatus(userId: number) {
        return instance.get<string>(`/profile/status/${userId}`).then((res) => res);
    },
    updateStatus(status: string) {
        return instance.put<string>(`/profile/status`, {status}).then((res) => res);
    },
};

export type ProfileResponseType = {
    boutMe: string
    contacts: ContactsProfileType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: null
    photos: { small: string, large: string }
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