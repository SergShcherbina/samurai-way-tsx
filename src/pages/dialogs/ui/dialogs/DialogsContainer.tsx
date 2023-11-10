import {addMessageAC, setDialogsTC, updateMessageAC} from "../../model/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppDispatchType, AppStateType} from "../../../../app/model/store";
import {ComponentType} from "react";
import {withAuthRedirect} from "../../../../common/hoc/withAuthRedirect";
import {compose} from "redux";
import {reset} from "redux-form";

export type MapStateToPropsDialogType = ReturnType<typeof mapStateToProps>
export type MapDispatchToPropsDialogType = ReturnType<typeof mapDispatchToProps>

let mapStateToProps = (state: AppStateType) => {
    return {
        messageText: state.dialogsPage.messageText,
        messageData: state.dialogsPage.messageData,
        dialogsData: state.dialogsPage.dialogsData,
    };
};
let mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        updateMessageHandler: (value: string) => {
            dispatch(updateMessageAC(value));
        },
        addMessageHandler: (dataForm: string) => {
            dispatch(addMessageAC(dataForm));
            dispatch(reset('dialogsForm'))
        },
        setDialogs: () => {
            dispatch(setDialogsTC())
        }
    };
};

// //HOC которая делает редирект при отсутствии авторизации
// const AuthRedirectComponent = withAuthRedirect(dialogs)
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);
