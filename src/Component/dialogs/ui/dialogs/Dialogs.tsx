import React, {useEffect} from "react";
import {MapDispatchToPropsDialogType, MapStateToPropsDialogType} from "./DialogsContainer";
import styled from "styled-components";
import {Dialog} from "./Dialog";
import {Messages} from "../message/Messages";
import {Spinner} from "../../../spinner/Spinner";

type DialogsType = MapStateToPropsDialogType & MapDispatchToPropsDialogType;
export type DialogReduxFormType = {
    dialogMessage: string;
};

export const Dialogs = (props: DialogsType) => {
    useEffect(() => {
        props.setDialogs()
    }, []);

    const onSubmit = (formData: DialogReduxFormType) => {
        props.onClickHandler(formData.dialogMessage);
    };

    if (!props.dialogsData[0]) return <Spinner/>

    return (
        <DialogsRoot>

            <DialogsWrapper>
                {props.dialogsData.map((dialog, i) =>
                    <Dialog
                        key={dialog.id}
                        name={dialog.name}
                        id={dialog.id}
                        avatar={dialog.photos.small}
                    />)}
            </DialogsWrapper>

            <Messages
                onSubmit={onSubmit}
                messagesData={props.messageData}
                avatar={props.dialogsData[0].photos.small}
                userName={props.dialogsData[0].name}
            />
        </DialogsRoot>
    );
};

const DialogsRoot = styled.div`
  display: flex;
  gap: 20px;

  padding: 20px;
  background-color: var(--bloks-color);
  border-radius: var(--border-radius);
  overflow: auto;
`
const DialogsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-right: 3px solid var(--border-color);
`

