import React, {FC} from 'react';
import {DialogReduxForm} from "../dialogs/DialogsForm";
import {Message} from "./Message";
import {DialogReduxFormType} from "../dialogs/Dialogs";
import {MessageDataType} from "../../model/dialogs-reducer";
import userAva from '../../../../assets/img/userAva.jpg'
import styled from "styled-components";

type PropsType = {
    messagesData: MessageDataType[]
    onSubmit: (formData: DialogReduxFormType) => void
    avatar: string
    userName: string
}

export const Messages: FC<PropsType> = ({messagesData, onSubmit, avatar, userName}) => {
    const ava: string = avatar ? avatar : userAva

    return (
        <Root>
            <Companion>
                <div>
                    <img src={ava} alt={'alt'}/>
                </div>
                <div>
                    <h3>{userName}</h3>
                    <em>{'Online'}</em>
                </div>
            </Companion>

            <MessagesWrapper>
                {messagesData.map((message, i) =>
                    <Message message={message.messageD} key={message.id} time={message.time}
                             idMessage={message.id}/>)}
            </MessagesWrapper>

            <DialogReduxForm onSubmit={onSubmit}/>
        </Root>
    );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`
const Companion = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  border-bottom: 3px solid var(--main-color);

  & > div {
    width: 100px;

    & img {
      width: 100%;
      height: 100%;
      border-radius: 50%
    }
  }
`
const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 15px;

  margin-bottom: 20px;
  max-height: 60vh;
  overflow-y: auto;
`