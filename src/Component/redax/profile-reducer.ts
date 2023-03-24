import {ProfilePageType} from "../../App";

const  initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounter: 12, counterDislike: 2},
        {id: 2, message: 'It\'s my first post', likeCounter: 11, counterDislike: 2},
        // {id: 3, message: 'Hi, how are you?', likeCounter: 11, counterDislike: 2},
        // {id: 4, message: 'Hi, how are you?', likeCounter: 11, counterDislike: 2},
    ],
    newPostText: ''
};

export const profileReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'ADD-POST':
            const valueTextarea: string = state.newPostText
            if (valueTextarea === '') {
                return;
            } else {
                let newPostObj = {id: 6, message: valueTextarea, likeCounter: 0, counterDislike: 0}
                state.posts.push(newPostObj)
                state.newPostText = '';
            }
            break;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newPostText;
            break;
    }

    return state
}

export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    }
}
export const updateNewPostTextActionCreator = (value: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText: value,
    }
}