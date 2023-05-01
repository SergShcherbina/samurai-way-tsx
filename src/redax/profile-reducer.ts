import {PostsType} from "../App";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import { ProfileInfoType} from "../Component/Profile/ProfileInfo/ProfileInfo";


export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    profile: any
    status: string
}
type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}
type AddPostAT = {
    type: "ADD-POST"
}
type setUserProfileAT = ReturnType<typeof setProfile>
type setStatusAT = ReturnType<typeof setStatus>

type ActionType = AddPostAT | UpdateNewPostTextAT | setUserProfileAT | setStatusAT;

const initialState = {
    posts: [],
    newPostText: '',
    profile: {},
    status: '',
};


export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const valueTextarea: string = state.newPostText
            if (valueTextarea === '') {
                return state;
            } else {
                let newPostObj = { id: 6, message: valueTextarea, likeCounter: 0, counterDislike: 0 }
                return {
                    ...state, posts: [newPostObj, ...state.posts], newPostText: ''
                }
            }
        case 'UPDATE-NEW-POST-TEXT':
            return { 
                ...state, newPostText: action.newPostText 
            }
        case "SET-PROFILE": {
            return {
                ...state, profile: action.profile
            }
        }
        case "SET-STATUS":
            return {
                ...state, status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    }
}
export const updateNewPostTextActionCreator = (value: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT' as const,
        newPostText: value,
    }
}
export const setProfile = (profile: ProfileInfoType) => {
    return {
        type: "SET-PROFILE",
        profile,
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: "SET-STATUS",
        status,
    } as const
}


export const setUserProfile = (userId: number) => {
    return (dispatch: Dispatch)=> {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setProfile(response))
            })
            .catch((err) => {
                console.log('ОШИБКА setUserProfile')
            })
    }
}
export const getStatus = (userId: number) => {
    return (dispatch: Dispatch)=> {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
            .catch((err) => {
                console.log('ОШИБКА getStatus')
            })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                    }
            })
    }
}