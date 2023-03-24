import {DialogsDataType, MessageDataType} from "../../App";
import {addNewMessageBodyCreator, updateNewMessageBodyCreator} from "../redax/dialogs-reducer";
import {Dialogs} from "./Dialogs";

export type DialogsContainer = {
    dialogsData: DialogsDataType[]
    messageData: MessageDataType[]
    dispatch: (action: {type: string, text?: string}) => void
    messageText: string
}

export const DialogsContainer = (props: any) => {
    const state = props.store.getState();

    const onChangeHandler = (value: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(value))
    }
    const onClickHandler = () => {
        console.log("onClick")
        props.store.dispatch(addNewMessageBodyCreator())
    }

    return (
        <Dialogs
            dialogsData={state.dialogsPage.dialogsData}
            messageData={state.dialogsPage.messageData}
            onChangeHandler={onChangeHandler}
            onClickHandler={onClickHandler}
            messageText={state.dialogsPage.messageText}
        />
    )
}