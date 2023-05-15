import {DialogsDataType, MessageDataType} from "../App";

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
    dataForm: string
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
            if (action.dataForm.trim() === '') {
                break;
            } else {
                const message = {id: +action.dataForm + 11, messageD: action.dataForm}
                return {
                    ...state, messageData : [...state.messageData, message]
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
export const addNewMessageBodyCreator = (dataForm: string) => {
    return {
        type: 'ADD-NEW-MESSAGE',
        dataForm
    }
}