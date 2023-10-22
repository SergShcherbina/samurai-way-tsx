import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faMessage, faMusic, faNewspaper, faPersonDotsFromLine, faUserGroup
} from "@fortawesome/free-solid-svg-icons"
import {useSelector} from "react-redux";
import {AppStateType} from "../../../app/model/store";
import {Spinner} from "../../../assets/spinner/Spinner";

//exact activeClassName={classes.active}
export const Navbar = () => {
    return (
        <Nav>
            <li>
                <FontAwesomeIcon icon={faPersonDotsFromLine} size={'xs'}/>
                <NavLink activeStyle={{color: '#2196f3', fontWeight: 700}} to="/profile">Profile</NavLink>
            </li>
            <li>
                <FontAwesomeIcon icon={faMessage} size={'xs'}/>
                <NavLink activeStyle={{color: '#2196f3', fontWeight: 700}} to="/message">Message</NavLink>
            </li>
            <li>
                <FontAwesomeIcon icon={faNewspaper} size={'xs'}/>
                <NavLink activeStyle={{color: '#2196f3', fontWeight: 700}} to="/news">News</NavLink>
            </li>
            <li>
                <FontAwesomeIcon icon={faMusic} size={'xs'}/>
                <NavLink activeStyle={{color: '#2196f3', fontWeight: 700}} to="/music">Music</NavLink>
            </li>
            <li><FontAwesomeIcon icon={faUserGroup} size={'xs'}/>
                <NavLink activeStyle={{color: '#2196f3', fontWeight: 700}} to="/users">Users</NavLink>
            </li>
        </Nav>
    );
};

const Nav = styled.ul`
  background-color: var(--color-bloks);
  box-shadow: var(--box-shadow-blocks);
  padding: 20px;
  border-radius: 10px;
  font-size: 1.1rem;
  height: fit-content;
  list-style-type: none;

  position: sticky;
  top: 5px;

  & li {
    padding-bottom: 10px;
    transition: all 0.3s;

    & a {
      padding-left: 10px;
    }
    &:hover {
      transform: translateX(2px);
    }
  }
`