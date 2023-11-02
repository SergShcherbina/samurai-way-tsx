import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faMessage, faMusic, faNewspaper, faPersonDotsFromLine, faUserGroup
} from "@fortawesome/free-solid-svg-icons"

export const Navbar = () => {
    return (
        <Nav>
            <li>
                <Icon icon={faPersonDotsFromLine} size={'xs'}/>
                <NavLink activeStyle={{color: '#2196f3', fontWeight: 700}} to="/profile">Profile</NavLink>
            </li>
            <li>
                <Icon icon={faMessage} size={'xs'}/>
                <NavLink activeStyle={{color: '#2196f3', fontWeight: 700}} to="/message">Dialogs</NavLink>
            </li>
            <li>
                <Icon icon={faNewspaper} size={'xs'}/>
                <NavLink activeStyle={{color: '#2196f3', fontWeight: 700}} to="/gallery">Gallery</NavLink>
            </li>
            <li>
                <Icon icon={faMusic} size={'xs'}/>
                <NavLink activeStyle={{color: '#2196f3', fontWeight: 700}} to="/music">Music</NavLink>
            </li>
            <li><Icon icon={faUserGroup} size={'xs'}/>
                <NavLink activeStyle={{color: '#2196f3', fontWeight: 700}} to="/users">Users</NavLink>
            </li>
        </Nav>
    );
};

const Icon = styled(FontAwesomeIcon)``;

const Nav = styled.ul`
  background-color: var(--block-color);
  box-shadow: var(--box-shadow-blocks);
  padding: 20px;
  border-radius: 10px;
  font-size: 1.2rem;
  height: fit-content;
  list-style-type: none;

  position: sticky;
  top: 5px;

  & li {
    padding-bottom: 15px;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 10px;

    & a {
      flex-grow: 1;
    }

    &:hover {
      transform: translateX(2px);

      ${Icon} > path {
        fill: #2196F3;
        stroke: var(--second-text-color);
        stroke-width: 20px;
      }

    }
  }
`