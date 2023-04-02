import {DialogsDataType, MessageDataType} from "../../App";

export type DialogsReducerType = {
    dialogsData: DialogsDataType[],
    messageData: MessageDataType[],
    messageText: any
}
type UpdateNewMessageBodyCreatorType = {
    type: 'UPDATE-NEW-MESSAGE'
    valueInput: string
}
type AddNewMessageBodyCreatorType = {
    type: 'ADD-NEW-MESSAGE'
}

const  initialState : DialogsReducerType = {
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

type ActionType = UpdateNewMessageBodyCreatorType | AddNewMessageBodyCreatorType

export const dialogsReducer = (state: DialogsReducerType = initialState, action: ActionType): DialogsReducerType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE':
            return {...state, messageText: action.valueInput};
        case 'ADD-NEW-MESSAGE':
            if (state.messageText.trim() === '') {
                break;
            } else {
                const message = {id: +state.messageText + 11, messageD: state.messageText}
                return {
                    ...state, messageData : [...state.messageData, message] , messageText : ''
                }
            } default:
                return state
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