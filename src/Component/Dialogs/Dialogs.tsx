import classes from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsDataType, MessageDataType} from "../../App";
import {ChangeEvent} from "react";
import {addNewMessageBodyCreator, updateNewMessageBodyCreator} from "../redax/state";

export type DialogsType = {
    dialogsData: DialogsDataType[]
    messageData: MessageDataType[]
    dispatch: (action: {type: string, text?: string}) => void
    messageText: string
}

export const Dialogs = (props: DialogsType) => {
     const messageElement = props.messageData
         .map((el, i) => <Message message={el.messageD} key={i}/>)

     const dialogElement = props.dialogsData
         .map((el, i) => <DialogItem key={i + el.id} name={el.name} id={el.id}/>
         )

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
    }
    const onClickHandler = () => {
        props.dispatch(addNewMessageBodyCreator())
    }

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