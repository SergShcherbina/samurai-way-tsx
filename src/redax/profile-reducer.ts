import { ProfilePageType } from "../App";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {GetProfileType} from "../Component/Profile/ProfileInfo/ProfileInfo";


type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}
type AddPostAT = {
    type: "ADD-POST"
}
type setUserProfileAT = ReturnType<typeof setUserProfile>

type ActionType = AddPostAT | UpdateNewPostTextAT | setUserProfileAT;

const initialState = {
    posts: [],
    newPostText: '',
    profile: {},
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
        case "SET-USER-PROFILE": {
            return {
                ...state, profile: action.profile
            }
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
export const setUserProfile = (profile: any) => {
    return {
        type: "SET-USER-PROFILE",
        profile,
    } as const
}

export const setUser = (userId: number) => {
    return (dispatch: Dispatch)=> {
        usersAPI.getUser(userId)
            .then(response => {
                dispatch(setUserProfile(response))
            })
            .catch((err) => {
                console.log('ОШИБКА')
            })
    }
}