import {ProfilePageType} from "../../App";


const  initialState = {
    posts: [
        // {id: 1, message: 'Hi, how are you?', likeCounter: 12, counterDislike: 2},
        // {id: 2, message: 'It\'s my first post', likeCounter: 11, counterDislike: 2},
    ],
    newPostText: ''
};
type AddPostAT = {
    type: "ADD-POST"
}
type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}

type ActionType = AddPostAT | UpdateNewPostTextAT;

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const valueTextarea: string = state.newPostText
            if (valueTextarea === '') {
                return state;
            } else {
                let newPostObj = {id: 6, message: valueTextarea, likeCounter: 0, counterDislike: 0}
                return {
                    ...state, posts: [newPostObj, ...state.posts], newPostText: ''
                }
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newPostText}
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
        newPostText: value ,
    }
}