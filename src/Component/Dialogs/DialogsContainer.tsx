import {addNewMessageBodyCreator, updateNewMessageBodyCreator} from "../redax/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../redax/redux-store";


let mapStateToProps = (state: AppStateType) => {
    return  {
        messageText: state.dialogsPage.messageText,
        messageData: state.dialogsPage.messageData,
        dialogsData: state.dialogsPage.dialogsData,
        auth: state.auth.isAuth
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
