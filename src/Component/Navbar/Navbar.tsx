import classes from "./navbar.module.css"
import {NavLink} from "react-router-dom";
import {Friends} from "./Friends/Friends";
import {FriendDataType} from "../../App";

export type FriendType = {
    friendData: FriendDataType[]
}

export const Navbar = (props: FriendType) => {
    return (
        <nav className={classes.nav}>
            <div> <NavLink activeClassName={classes.active} to="/profile" > Profile </NavLink> </div>
            <div> <NavLink activeClassName={classes.active} to="/message" > Message </NavLink> </div>
            <div> <NavLink activeClassName={classes.active} to="/news" > News </NavLink> </div>
            <div> <NavLink activeClassName={classes.active} to="/music" > Music </NavLink> </div>
            <div> <NavLink activeClassName={classes.active} to="/setting" > Setting </NavLink> </div>
            <div>
                <Friends friendData={props.friendData}/>
            </div>
        </nav>
    )
}