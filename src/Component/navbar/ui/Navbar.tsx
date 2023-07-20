import classes from "./navbar.module.css";
import {NavLink} from "react-router-dom";
import {Friends} from "../../friends/ui/Friends";
import {store} from "../../../app/model/store";

export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <NavLink exact activeClassName={classes.active} to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink activeClassName={classes.active} to="/message">Message</NavLink>
            </div>
            <div>
                <NavLink activeClassName={classes.active} to="/news">News</NavLink>
            </div>
            <div>
                <NavLink activeClassName={classes.active} to="/music">Music</NavLink>
            </div>
            <div>
                <NavLink activeClassName={classes.active} to="/setting">Setting</NavLink>
            </div>
            <div>
                <NavLink activeClassName={classes.active} to="/users">Users</NavLink>
            </div>
            <div>
                <Friends
                    sidebar={store.getState().sidebar}
                />
            </div>
        </nav>
    );
};
