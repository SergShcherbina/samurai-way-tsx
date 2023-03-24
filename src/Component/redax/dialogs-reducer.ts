

const  initialState = {
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
    };

export const dialogsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE':
            return state.messageText = {...state, messageText: action.valueInput};
        case 'ADD-NEW-MESSAGE':
            if (state.messageText.trim() === '') {
                return;
            } else {
                const message = {id: +state.messageText + 11, messageD: state.messageText}
                state.messageData.push(message);
                state.messageText = '';
            }
            break;
    }
    return state
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