import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type DialogType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogType) => {
    return (
        <div><NavLink className={classes.link} to={"/dialog/" + props.id}> {props.name} </NavLink></div>
    )
}