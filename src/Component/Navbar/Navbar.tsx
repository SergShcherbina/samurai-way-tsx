import classes from "./navbar.module.css"
import {NavLink} from "react-router-dom";
import {Friends} from "./Friends/Friends";
import {SidebarType} from "../../App";

export type NavbarType = {
    store: SidebarType[]
}

export const Navbar = (props: any) => {
    return (
        <nav className={classes.nav}>
            <div> <NavLink exact activeClassName={classes.active} to="/" > Profile </NavLink> </div>
            <div> <NavLink activeClassName={classes.active} to="/message" > Message </NavLink> </div>
            <div> <NavLink activeClassName={classes.active} to="/news" > News </NavLink> </div>
            <div> <NavLink activeClassName={classes.active} to="/music" > Music </NavLink> </div>
            <div> <NavLink activeClassName={classes.active} to="/setting" > Setting </NavLink> </div>
            <div>
                <Friends sidebar={props.store.getState().sidebar}/>
            </div>
        </nav>
    )
}