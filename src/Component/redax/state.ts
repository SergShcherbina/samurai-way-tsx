
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
export const updateNewMessageBodyCreator = (value: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        valueInput: value
    }
}
export const addNewMessageBodyCreator = () => {
    return {
        type: 'ADD-NEW-MESSAGE'
    }
}

export const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCounter: 12, counterDislike: 2},
                {id: 2, message: 'It\'s my first post', likeCounter: 11, counterDislike: 2},
                // {id: 3, message: 'Hi, how are you?', likeCounter: 11, counterDislike: 2},
                // {id: 4, message: 'Hi, how are you?', likeCounter: 11, counterDislike: 2},
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
            messageText: ''
        },
        sidebar: [
            {id: 1, name: 'Sveta', src: "https://vjoy.cc/wp-content/uploads/2020/10/7-1.jpg"},
            {id: 2, name: 'Igor', src: 'https://photoshablon.com/_ph/46/2/617532178.jpg'},
            {id: 3, name: 'Nik', src: 'https://vjoy.cc/wp-content/uploads/2020/10/174602245.jpg'},
        ],
    },
    getState() {
        return this._state
    },
    _callSubskriber(arg: any) {
        console.log('State is changed')
    },
    _addPost(valueTextarea: string) {
        if (valueTextarea.trim() === '') {
            return;
        } else {
            let newPostObj = {id: 6, message: valueTextarea, likeCounter: 0, counterDislike: 0}
            this._state.profilePage.posts.push(newPostObj)
            this._callSubskriber(store.getState());
            this._state.profilePage.newPostText = '';
        }
    },
    _updateNewPostText(postText: string) {
        this.getState().profilePage.newPostText = postText;
        this._callSubskriber(this.getState());
    },
    subscribe(observer: any) {
        this._callSubskriber = observer
    },
    _changeNewMessageText(value: string){
        this._state.dialogsPage.messageText = value;
        this._callSubskriber(store.getState());
    },
    _addNewMessageText(value: string) {
        if (value.trim() === '') {
            return;
        } else {
            const message = {id: +value+11, messageD: value}
            this._state.dialogsPage.messageData.push(message);
            this._callSubskriber(store.getState());
            this._state.dialogsPage.messageText = '';
        }
    },


    dispatch(action: any) {
        if (action.type === 'ADD-POST') {
            this._addPost(this.getState().profilePage.newPostText)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newPostText)
        } else if (action.type === 'UPDATE-NEW-MESSAGE'){
            this._changeNewMessageText(action.valueInput)
        } else if (action.type === 'ADD-NEW-MESSAGE'){
            this._addNewMessageText(this._state.dialogsPage.messageText)
        }
    }
}


// window.store = store;