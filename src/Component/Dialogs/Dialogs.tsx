import classes from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsType} from "../../App";



export const Dialogs = (props: DialogsType) => {

     const messageElement = props.messageData
         .map((el, i) => <Message message={el.messageD} key={i}/>)

     const dialogElement = props.dialogsData
         .map((el, i) => <DialogItem key={i + el.id} name={el.name} id={el.id}/>
         )

    return (
        <div className={classes.dialogs}>
            <div >
                {/*<div className={classes.dialog + ' ' + classes.active}><NavLink to="/dialog1/"> Sacha </NavLink></div>*/}
                {dialogElement}
            </div>
            <div>
                {messageElement}
            </div>
        </div>
    )
}