import {Dispatch} from "redux";
import {profileAPI, ResponsePhotoType, ResponseProfileType} from "../api/profile-api";
import {ResultCode} from "../../../common/enums/emuns";


const initialState: ProfilePageType = {
    posts: [],
    newPostText: "",
    profile: {},
    status: "",
};

//reducer
export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            if (action.values === "") {
                return state;
            } else {
                let newPostObj = {id: 6, message: action.values, likeCounter: 0, counterDislike: 0};
                return {
                    ...state,
                    posts: [newPostObj, ...state.posts],
                    newPostText: "",
                };
            }
        case "SET-PROFILE": {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case "PROFILE/SET-STATUS":
            return {
                ...state,
                status: action.status,
            };
        case "PROFILE/REPLACE-PHOTO":
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
};

//actions
export const addPostAC = (values: string) => {
    return {
        type: "ADD-POST",
        values,
    } as const
};
export const setProfileAC = (profile: ResponseProfileType) => {
    return {
        type: "SET-PROFILE",
        profile,
    } as const;
};
export const setStatusAC = (status: string) => {
    return {
        type: "PROFILE/SET-STATUS",
        status,
    } as const;
};
const replaceAvatarAC = (photos: ResponsePhotoType) => {
    return {
        type: "PROFILE/REPLACE-PHOTO",
        photos
    } as const
}

//Thunks
export const setUserProfileTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI
            .getProfile(userId)
            .then((response) => {
                dispatch(setProfileAC(response));
            })
            .catch((err) => {
                console.log("ОШИБКА setUserProfile:", err);
            });
    };
};

export const getStatusTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI
            .getStatus(userId)
            .then((response) => {
                dispatch(setStatusAC(response.data));
            })
            .catch((err) => {
                console.log("ОШИБКА getStatus");
            });
    };
};

export const updateStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then((response) => {
            dispatch(setStatusAC(status));
        });
    };
};

export const replaceAvatarTC = (file: File) => {
    return (dispatch: Dispatch) => {
        profileAPI.replaceFile(file)
            .then((response) => {
                if (response.resultCode === ResultCode.SUCCESS) {
                    dispatch(replaceAvatarAC(response.data.photos))
                } else {
                    console.log('replaceAvatarTC:', response.messages)
                }
            });
    };
};

//types
export type ProfilePageType = {
    posts: PostsType[];
    newPostText: string;
    profile: any;
    status: string;
};
export type PostsType = {
    id: number;
    message: string;
    likeCounter: number;
    counterDislike: number;
};
export type AddPostAT = ReturnType<typeof addPostAC>
type SetUserProfileAT = ReturnType<typeof setProfileAC>;
type SetStatusAT = ReturnType<typeof setStatusAC>;
type ReplaceAvatarAT = ReturnType<typeof replaceAvatarAC>

export type ActionType = AddPostAT | SetUserProfileAT | SetStatusAT | ReplaceAvatarAT;
