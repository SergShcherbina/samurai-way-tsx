import classes from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsDataType, MessageDataType} from "../../App";
import {ChangeEvent} from "react";
import {Redirect} from "react-router-dom";

export type DialogsType = {
    dialogsData: DialogsDataType[]
    messageData: MessageDataType[]
    onChangeHandler: (value: string) => void
    onClickHandler: () => void
    messageText: string
    auth: boolean
}

export const Dialogs = (props: DialogsType) => {
     const messageElement = props.messageData
         .map((el, i) => <Message message={el.messageD} key={i}/>)

     const dialogElement = props.dialogsData
         .map((el, i) => <DialogItem key={i + el.id} name={el.name} id={el.id}/>
         )

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeHandler(e.currentTarget.value)
    }
    const onClickHandler = () => {
        props.onClickHandler()
    }

    //если не залогинены, то делаем перенаправление на стр login
    if(!props.auth) return <Redirect to={'/login'}/>

    return (
        <div className={classes.dialogs}>
            <div >
                {dialogElement}
            </div>
            <div>
                {messageElement}
                <input
                    value={props.messageText}
                    onChange={onChangeHandler}
                />
                <button onClick={onClickHandler} >+</button>
            </div>
        </div>
    )
}