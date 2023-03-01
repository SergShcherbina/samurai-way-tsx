import {StateType} from "../../App";

let rerenderEntireTree = (arg: any) => {
    console.log('State is changed')
}

export const state: StateType = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCounter: 12, counterDislike: 2},
            {id: 2, message: 'It\'s my first post', likeCounter: 11, counterDislike: 2},
            {id: 3, message: 'Hi, how are you?', likeCounter: 11, counterDislike: 2},
            {id: 4, message: 'Hi, how are you?', likeCounter: 11, counterDislike: 2},
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Sacha'},
            {id: 2, name: 'Petya'},
            {id: 3, name: 'Maikl'},
            {id: 4, name: 'Sveta'},
            {id: 5, name: 'Dima'},
            {id: 6, name: 'Serge'},
        ],
        messageData: [
            {id: 1, messageD: 'Hi'},
            {id: 2, messageD: 'Ho'},
            {id: 3, messageD: 'Hu'},
            {id: 4, messageD: 'He'},
            {id: 5, messageD: 'Ha'},
        ],
    },
    sidebar: [
        {id: 1, name: 'Sveta', src: "https://vjoy.cc/wp-content/uploads/2020/10/7-1.jpg"},
        {id: 2, name: 'Igor', src: 'https://photoshablon.com/_ph/46/2/617532178.jpg'},
        {id: 3, name: 'Nik', src: 'https://vjoy.cc/wp-content/uploads/2020/10/174602245.jpg'},
    ]
}

export const addPost = (valueTextarea: string) => {
    if(valueTextarea.trim() === '') {
        return;
    } else {
        let newPostObj = {id: 6, message: valueTextarea, likeCounter: 0, counterDislike: 0}
        state.profilePage.posts.push(newPostObj)
        rerenderEntireTree(state);
        state.profilePage.newPostText = '';
    }
}

export const updateNewPostText = (postText: string ) => {
    state.profilePage.newPostText = postText;
    rerenderEntireTree(state)
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer
}

