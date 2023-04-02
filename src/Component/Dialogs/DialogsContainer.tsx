import {DialogsDataType, MessageDataType} from "../../App";
import {addNewMessageBodyCreator, updateNewMessageBodyCreator} from "../redax/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../redax/redux-store";

export type DialogsContainer = {
    dialogsData: DialogsDataType[]
    messageData: MessageDataType[]
    dispatch: (action: {type: string, text?: string}) => void
    messageText: string
}


let mapStateToProps = (state: AppStateType) => {
    return  {
        messageText: state.dialogsPage.messageText,
        messageData: state.dialogsPage.messageData,
        dialogsData: state.dialogsPage.dialogsData,
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        onChangeHandler: (value: string) => {
            dispatch(updateNewMessageBodyCreator(value))
        },
        onClickHandler: () => {
            dispatch(addNewMessageBodyCreator())
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
