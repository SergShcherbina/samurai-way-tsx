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
type AddPostAT = {
    type: "ADD-POST"
    values: string
}
type SetUserProfileAT = ReturnType<typeof setProfile>
type SetStatusAT = ReturnType<typeof setStatus>

type ActionType = AddPostAT | SetUserProfileAT | SetStatusAT;

const initialState = {
    posts: [],
    newPostText: '',
    profile: {},
    status: '',
};


export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const valueTextarea: string = action.values
            if (valueTextarea === '') {
                return state;
            } else {
                let newPostObj = { id: 6, message: valueTextarea, likeCounter: 0, counterDislike: 0 }
                return {
                    ...state, posts: [newPostObj, ...state.posts], newPostText: ''
                }
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

export const addPostActionCreator = (values: string) => {
    return {
        type: "ADD-POST",
        values
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
                console.log('ОШИБКА setUserProfile:', err)
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