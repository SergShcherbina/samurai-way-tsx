import {UserType} from "../../users/model/users-types";
import {v4} from "uuid";
import {Dispatch} from "redux";
import {usersAPI} from "../../users/api/users-api";

const initialState: DialogsStateType = {
    dialogsData: [] as UserType[],
    messageData: [
        {id: v4(), messageD: "Hi, friend!", time: '31.10.2023, 13.33.23'},
        {id: v4(), messageD: "How are you?", time: '31.10.2023, 13.35.06'},
        {id: v4(), messageD: "Bye", time: '31.10.2023, 13.38.40'},
    ],
    messageText: "",
};

export const dialogsReducer = (state: DialogsStateType = initialState, action: DialogsActionType): DialogsStateType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE":
            return {...state, messageText: action.valueInput};
        case "ADD-NEW-MESSAGE":
            if (action.dataForm.trim() === "") {
                break;
            } else {
                const message = {id: v4(), messageD: action.dataForm, time: new Date().toLocaleString()};
                return {
                    ...state,
                    messageData: [...state.messageData, message],
                };
            }
        case 'DIALOGS/SET-DIALOGS':
            return {
                ...state, dialogsData: action.payload.dialogs
            }

        default:
            return state;
    }
    return state;
};

export const updateMessageAC = (value: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE",
        valueInput: value,
    };
};
export const addMessageAC = (dataForm: string) => {
    return {
        type: "ADD-NEW-MESSAGE",
        dataForm,
    };
};

const setDialogsAC = (users: UserType[]) => {
    return {
        type: 'DIALOGS/SET-DIALOGS',
        payload: {
            dialogs: users
        }
    } as const
}

export const setDialogsTC = () => {
    return (dispatch: Dispatch) => {
        usersAPI.getFriends()
            .then(res => {
                dispatch(setDialogsAC(res.items))
            })
    }
}


export type DialogsStateType = {
    dialogsData: UserType[];
    messageData: MessageDataType[];
    messageText: any;
};
export type MessageDataType = {
    id: string;
    messageD: string;
    time: string
};
type UpdateMessageAT = {
    type: "UPDATE-NEW-MESSAGE";
    valueInput: string;
};
type AddMessageAT = {
    type: "ADD-NEW-MESSAGE";
    dataForm: string;
};
type SetDialogsAT = ReturnType<typeof setDialogsAC>

type DialogsActionType = UpdateMessageAT | AddMessageAT | SetDialogsAT;