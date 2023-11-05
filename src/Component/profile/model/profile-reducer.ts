import {Dispatch} from "redux";
import {profileAPI, ResponsePhotoType, ResponseProfileType} from "../api/profile-api";
import {ResultCode} from "../../../common/enums/emuns";
import {v1} from "uuid";


const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'The characters Bert and Ernie on Sesame Street were named after ' +
                'Ernie the taxi driver in Frank Capra\'s "It\'s a Wonderful Life.',
            like: 55, dislike: 1, watch: 167 , postDate: '23.10.2023' , postTime: '05:20:55'},
        {id: v1(), message: 'The average person\'s left hand does 56% of the typing (when using ' +
                'the proper position of the hands on the keyboard; ' + 'Hunting and pecking doesn\'t count!).',
            like: 123, dislike: 0, watch: 351, postDate: '21.06.2023' , postTime: '01:20:36'},
        {id: v1(), message: 'The longest one-syllable words in the English language are "scraunched" ' +
                'and "strengthed." Some suggest that "squirreled" could be included, but squirrel is intended ' +
                'to be pronounced as two syllables (squir-rel) according to most dictionaries. "Screeched" and ' +
                '"strengths" are two other long one-syllable words, but they only have 9 ' + 'letters.',
            like: 4, dislike: 0, watch: 69, postDate: '03.01.2023' , postTime: '02:20:35'}
    ],
    newPostText: "",
    profile: {
        boutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: ''
        },
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: null,
        photos: {
            large: '',
            small: '',
        },
        userId: 0,
    } ,
    status: "",
};

//reducer
export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            if (action.values === "") {
                return state;
            } else {
                let newPostObj = {
                    id: v1(), message: action.values, like: 0, dislike: 0, watch: 0,
                    postDate: new Date().toLocaleDateString(),
                    postTime: new Date().toLocaleTimeString()
                };
                return {
                    ...state,
                    posts: [newPostObj, ...state.posts],
                    newPostText: "",
                };
            }
        case "SET-PROFILE": {
            return {
                ...state,
                profile: action.profile!,
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
        case "PROFILE/SET-LIKE":
            return {
                ...state, posts: state.posts
                    .map(el => el.id === action.postId ? {...el, like: el.like += 1 } : el)
            }
        case "PROFILE/SET-DISLIKE":
            return {
                ...state, posts: state.posts
                    .map(el => el.id === action.postId ? {...el, dislike: el.dislike += 1 } : el)
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

export const setLikeAC = (postId: string) => ({type: 'PROFILE/SET-LIKE', postId} as const )
export const setDislikeAC = (postId: string) => ({type: 'PROFILE/SET-DISLIKE', postId} as const )

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
    profile: ResponseProfileType;
    status: string;
};
export type PostsType = {
    id: string;
    message: string;
    like: number;
    dislike: number;
    watch: number;
    postDate: string;
    postTime: string;
};

export type SetLikeAT = ReturnType<typeof setLikeAC>
export type SetDislikeAT = ReturnType<typeof setDislikeAC>
export type AddPostAT = ReturnType<typeof addPostAC>
export type SetUserProfileAT = ReturnType<typeof setProfileAC>;
type SetStatusAT = ReturnType<typeof setStatusAC>;
type ReplaceAvatarAT = ReturnType<typeof replaceAvatarAC>

export type ActionType = AddPostAT | SetUserProfileAT | SetStatusAT | ReplaceAvatarAT | SetLikeAT | SetDislikeAT;
