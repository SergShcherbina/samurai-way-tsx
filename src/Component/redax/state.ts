import {rerenderEntireTree} from "../../render";

export const state = {
    dialogsData:[
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
    myPostData: [
        {id: 1, message: 'Hi, how are you?', likeCount: 1, counterDislike: 0},
        {id: 2, message: 'What do you do?', likeCount: 12, counterDislike: 4},
    ],
    friendData: [
        {id: 1, name: 'Sveta', src: "https://vjoy.cc/wp-content/uploads/2020/10/7-1.jpg"},
        {id: 2, name: 'Igor', src: 'https://photoshablon.com/_ph/46/2/617532178.jpg'},
        {id: 3, name: 'Nik', src: 'https://vjoy.cc/wp-content/uploads/2020/10/174602245.jpg'},
    ]
}

export const addPost = (valueTextarea: string) => {
    if(valueTextarea.trim() === '') {
        return;
    } else {
        let newPostObj = {id: 4, message: valueTextarea, likeCount: 0, counterDislike: 0}
        console.log(state)
        state.myPostData.push(newPostObj)
        rerenderEntireTree(state);
    }
    // let newPostObj = {id: 4, message: valueTextarea, likeCount: 0, counterDislike: 0}
    // console.log(state)
    // state.myPostData.push(newPostObj)
    // rerenderEntireTree(state);
}

