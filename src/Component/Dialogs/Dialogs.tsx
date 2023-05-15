import classes from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsDataType, MessageDataType} from "../../App";
import {ChangeEvent} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
type DialogReduxFormType = {
    dialogMessage: string
}
export type DialogsType = {
    dialogsData: DialogsDataType[]
    messageData: MessageDataType[]
    onChangeHandler: (value: string) => void
    onClickHandler: (data: string) => void
    messageText: string
    auth: boolean
}

export const Dialogs = (props: DialogsType) => {
     const messageElement = props.messageData
         .map((el, i) => <Message message={el.messageD} key={i}/>)

     const dialogElement = props.dialogsData
         .map((el, i) => <DialogItem key={i + el.id} name={el.name} id={el.id}/>
         )

    const onSubmit = (formData: DialogReduxFormType) => {
        props.onClickHandler(formData.dialogMessage)
    }
    // const onClickHandler = () => {
    //     props.onClickHandler()
    // }


    return (
        <div className={classes.dialogs}>
            <div >
                {dialogElement}
            </div>
            <div>
                {messageElement}
                <DialogReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

const DialogsForm: React.FC <InjectedFormProps<DialogReduxFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={'input'}
                name={'dialogMessage'}
                placeholder={'message'}
                // value={props.messageText}
                // onChange={onChangeHandler}
            />
            <button>+</button>
        </form>
    )
}

const DialogReduxForm = reduxForm<DialogReduxFormType>({form: 'dialogsForm'})(DialogsForm)