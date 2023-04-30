import {addNewMessageBodyCreator, updateNewMessageBodyCreator} from "../../redax/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Dispatch} from "redux";


let mapStateToProps = (state: AppStateType) => {
    return  {
        messageText: state.dialogsPage.messageText,
        messageData: state.dialogsPage.messageData,
        dialogsData: state.dialogsPage.dialogsData,
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onChangeHandler: (value: string) => {
            dispatch(updateNewMessageBodyCreator(value))
        },
        onClickHandler: () => {
            dispatch(addNewMessageBodyCreator())
        },
    }
}

//HOC которая делает редирект при отсутствии авторизации
const AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
