import classes from './dialogs.module.css'
import {NavLink} from "react-router-dom";

type MessageType = {
    message: string
}

type DialogType = {
    name: string
    id: number
}
const DialogItem = (props : DialogType) => {
    return (
        <div className={classes.dialog}><NavLink to={"/dialog/" + props.id}> {props.name} </NavLink></div>
    )
}

const Message = (props: MessageType) => {
    return (
        <div>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {/*<div className={classes.dialog + ' ' + classes.active}><NavLink to="/dialog1/"> Sacha </NavLink></div>*/}
                < DialogItem name='Sacha' id ={1} />
                < DialogItem name='Petya' id ={2} />
                < DialogItem name='Maikl' id ={3} />
                < DialogItem name='Sveta' id ={4} />
                < DialogItem name='Dima' id ={5} />
                < DialogItem name='Serge' id ={6}/>
            </div>
            <div className={classes.message}>
                <Message message= "Hi"/>
                <Message message= "How ar you?"/>
                <Message message= "Hi!!!"/>
            </div>
        </div>
    )
}