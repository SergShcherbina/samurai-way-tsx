import {addNewMessageBodyCreator, updateNewMessageBodyCreator} from "../../redax/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import React, {ComponentType} from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose, Dispatch} from "redux";


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
        onClickHandler: (dataForm: string) => {
            dispatch(addNewMessageBodyCreator(dataForm))
        },
    }
}

// //HOC которая делает редирект при отсутствии авторизации
// const AuthRedirectComponent = withAuthRedirect(Dialogs)
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)