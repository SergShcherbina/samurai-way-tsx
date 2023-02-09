import classes from "./navbar.module.css"
import {Link, NavLink} from "react-router-dom";     //название classes можно менять(условное обозначение для проекта)
import { RefAttributes } from "react";


export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div> <NavLink activeClassName={classes.active} to="/profile" > Profile </NavLink> </div>
            <div> <NavLink activeClassName={classes.active} to="/message" > Message </NavLink> </div>
            <div> <NavLink activeClassName={classes.active} to="/news" > News </NavLink> </div>
            <div> <NavLink activeClassName={classes.active} to="/music" > Music </NavLink> </div>
            <div> <NavLink activeClassName={classes.active} to="/setting" > Setting </NavLink> </div>
        </nav>
    )
}