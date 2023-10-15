import classes from "./navbar.module.css";
import {NavLink} from "react-router-dom";
import {ConnectFriends} from "../../friends/ui/FriendsContainer";
import styled from "styled-components";


export const Navbar = () => {
    return (
        <Nav >
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
                <ConnectFriends/>
            </div>
        </Nav>
    );
};

const Nav = styled.div `
  background-color: var(--color-bloks);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 20px;
  font-size: 24px;
`