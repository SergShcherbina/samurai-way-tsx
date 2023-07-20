import {addNewMessageAC, updateNewMessageAC} from "../model/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../app/model/store";
import React, {ComponentType} from "react";
import {withAuthRedirect} from "../../../common/hoc/withAuthRedirect";
import {compose, Dispatch} from "redux";

export type MapStateToPropsDialogType = ReturnType<typeof mapStateToProps>
export type MapDispatchToPropsDialogType = ReturnType<typeof mapDispatchToProps>

let mapStateToProps = (state: AppStateType) => {
    return {
        messageText: state.dialogsPage.messageText,
        messageData: state.dialogsPage.messageData,
        dialogsData: state.dialogsPage.dialogsData,
    };
};
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onChangeHandler: (value: string) => {
            dispatch(updateNewMessageAC(value));
        },
        onClickHandler: (dataForm: string) => {
            dispatch(addNewMessageAC(dataForm));
        },
    };
};

// //HOC которая делает редирект при отсутствии авторизации
// const AuthRedirectComponent = withAuthRedirect(dialogs)
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);
