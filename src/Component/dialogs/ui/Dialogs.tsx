import React from "react";
import classes from "./dialogs.module.css";
import {Message} from "./message/Message";
import {Dialog} from "./dialog/Dialog";
import {DialogReduxForm} from "./DialogsForm";
import {MapDispatchToPropsDialogType, MapStateToPropsDialogType} from "./DialogsContainer";

type DialogsType = MapStateToPropsDialogType & MapDispatchToPropsDialogType;
export type DialogReduxFormType = {
    dialogMessage: string;
};

export const Dialogs = (props: DialogsType) => {
     const messageElements = props.messageData
        .map((el, i) => (
            <Message message={el.messageD} key={i}/>)
        );

    const dialogElements = props.dialogsData
        .map((el, i) => (
            <Dialog key={i + el.id} name={el.name} id={el.id}/>)
        );

    const onSubmit = (formData: DialogReduxFormType) => {
        props.onClickHandler(formData.dialogMessage);
    };

    return (
        <div className={classes.dialogs}>
            <div>{dialogElements}</div>
            <div>
                {messageElements}
                <DialogReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};


