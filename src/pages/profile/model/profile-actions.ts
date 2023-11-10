import {AppDispatchType} from "../../../app/model/store";
import {Dispatch} from "redux";
import {ResultCode} from "../../../common/enums/emuns";
import {ResponsePhotoType, ResponseProfileType} from "./profile-types";
import {profileAPI} from "../api/profile-api";

export const addPostAC = (values: string) => {
    return {
        type: "PROFILE/ADD-POST",
        values,
    } as const
};
export const setProfileAC = (profile: ResponseProfileType) => {
    return {
        type: "PROFILE/SET-PROFILE",
        profile,
    } as const;
};
export const setStatusAC = (status: string) => {
    return {
        type: "PROFILE/SET-STATUS",
        status,
    } as const;
};
export const replaceAvatarAC = (photos: ResponsePhotoType) => {
    return {
        type: "PROFILE/REPLACE-PHOTO",
        photos
    } as const
};
export const addViewsAC = (id: string) => {
    return {
        type: 'PROFILE/ADD_VIEWS',
        payload: id
    } as const
};
export const setLikeAC = (postId: string) => ({type: 'PROFILE/SET-LIKE', postId} as const)
export const setDislikeAC = (postId: string) => ({type: 'PROFILE/SET-DISLIKE', postId} as const)
export const setErrorAC = (error: string | null) => ({type: 'PROFILE/SET-ERROR', error} as const)

//Thunks
export const setUserProfileTC = (userId: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(setErrorAC(null))
        try {
            const response = await profileAPI.getProfile(userId)
            dispatch(setProfileAC(response));
        } catch (err: any) {
            console.log("setUserProfileTC:", err);
            dispatch(setErrorAC(err.message))
        }
    };
};

export const getStatusTC = (userId: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(setErrorAC(null))
        try {
            const response = await profileAPI.getStatus(userId)
            dispatch(setStatusAC(response.data));
        } catch (err: any) {
            console.log("getStatusTC:", err);
            dispatch(setErrorAC(err.message))
        }
    };
};

export const updateStatusTC = (status: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(setErrorAC(null))
        try {
            const response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === ResultCode.SUCCESS) {
                dispatch(setStatusAC(status));
            } else {
                if (response.data.messages[0]) {
                    dispatch(setErrorAC(response.data.messages[0]))
                }
            }
        } catch (err: any) {
            console.log('updateStatusTC:', err)
            dispatch(setErrorAC(err.message))
        }
    }
};

export const replaceAvatarTC = (file: File) => {
    return async (dispatch: Dispatch) => {
        dispatch(setErrorAC(null))
        try {
            const response = await profileAPI.replaceFile(file)
            if (response.resultCode === ResultCode.SUCCESS) {
                dispatch(replaceAvatarAC(response.data.photos))
            } else {
                if (response.messages[0]) {
                    dispatch(setErrorAC(response.messages[0]))
                }
            }
        } catch (err: any) {
            debugger
            console.log('replaceAvatarTC:', err)
            dispatch(setErrorAC(err.message))
        }
    };
};

export const updateProfileInfo = (info: ResponseProfileType) => {
    return async (dispatch: AppDispatchType) => {
        dispatch(setErrorAC(null))
        try {
            const response = await profileAPI.updateProfile(info)
            if (response.resultCode === ResultCode.SUCCESS) {
                void dispatch(setUserProfileTC(info.userId))
            } else {
                if (response.messages[0]) {
                    dispatch(setErrorAC(response.messages[0]))
                }
            }
        } catch (err: any) {
            console.log('updateProfileInfo:', err)
            dispatch(setErrorAC(err.message))
        }
    }
};

