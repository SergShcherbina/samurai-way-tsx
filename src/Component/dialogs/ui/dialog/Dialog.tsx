import React from "react";
import classes from "./dialog.module.css";
import {NavLink} from "react-router-dom";

type DialogType = { name: string; id: number; };

export const Dialog: React.FC<DialogType> = ({name, id}) => {
    return (
        <div>
            <NavLink className={classes.link} to={"/dialog/" + id}>
                {name}
            </NavLink>
        </div>
    );
};
