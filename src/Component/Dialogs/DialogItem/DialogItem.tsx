import classes from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

type DialogType = {
  name: string;
  id: number;
};

export const DialogItem: React.FC<DialogType> = (props) => {
  return (
    <div>
      <NavLink className={classes.link} to={"/dialog/" + props.id}>
        {" "}
        {props.name}{" "}
      </NavLink>
    </div>
  );
};
