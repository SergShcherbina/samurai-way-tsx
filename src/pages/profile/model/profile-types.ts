import {
    addPostAC,
    addViewsAC, deletePostAC,
    replaceAvatarAC,
    setDislikeAC, setErrorAC,
    setLikeAC,
    setProfileAC,
    setStatusAC
} from "./profile-actions";
import {ResultCode} from "../../../common/enums/emuns";

export type ProfilePageType = {
    posts: PostsType[];
    newPostText: string;
    profile: ResponseProfileType;
    status: string;
    errorMessage: null | string
};

export type PostsType = {
    id: string;
    message: string;
    like: number;
    dislike: number;
    views: number;
    postDate: string;
    postTime: string;
};

export type ResponseProfileType = {
    aboutMe: string
    contacts: ContactsProfileType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: null
    photos: ResponsePhotoType
    userId: number
}

export type ContactsProfileType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string
}

export type ResponseFileType = {
    data: { photos: ResponsePhotoType }
    fieldsErrors: string[]
    messages: string[]
    resultCode: ResultCode
}

export type ResponsePhotoType = {
    large: string
    small: string
}

type AddViewsAT = ReturnType<typeof addViewsAC>
type SetLikeAT = ReturnType<typeof setLikeAC>
type SetDislikeAT = ReturnType<typeof setDislikeAC>
export type AddPostAT = ReturnType<typeof addPostAC>
type SetUserProfileAT = ReturnType<typeof setProfileAC>;
type SetStatusAT = ReturnType<typeof setStatusAC>;
type ReplaceAvatarAT = ReturnType<typeof replaceAvatarAC>
type SetErrorAT = ReturnType<typeof setErrorAC>
type DeletePostAC = ReturnType<typeof deletePostAC>

export type ProfileActionType =
    AddPostAT
    | SetUserProfileAT
    | SetStatusAT
    | ReplaceAvatarAT
    | SetLikeAT
    | SetDislikeAT
    | AddViewsAT
    | SetErrorAT
    | DeletePostAC;
