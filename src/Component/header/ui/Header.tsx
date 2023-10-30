import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {ResponseProfileType} from "../../profile/api/profile-api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOut} from "@fortawesome/free-solid-svg-icons";
import React from "react";

type HeaderType = {
    isAuth: boolean;
    userName: string;
    logoutTC: () => void;
    profile: ResponseProfileType
};

export const Header = (props: HeaderType) => {

    const isMyProfile = () => {
        if(props.isAuth){
            return <LogOut
                onClick={props.logoutTC}>
                {props.userName} <FontAwesomeIcon icon={faSignOut} size={"xl"}/>
            </LogOut>
        } else {
            return <NavLink activeStyle={{color: '#2196f3', fontWeight: 700}} to={"/login"}>Login</NavLink>
        }
    }

    return (
        <HeaderStyle>
            <LogoWrapper to={"/"}>
                <Logo></Logo>
                <span>Social network</span>
            </LogoWrapper>
            { isMyProfile() }
        </HeaderStyle>
    );
};


const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  grid-template: auto / 1fr;
  grid-column: 1 / 4;
  grid-row: 1;

  background-color: var(--bloks-color);
  border-radius: 10px;
  padding: 0 var(--padding-blocks);
  height: 70px;

  img {
    height: 80px;
`

const Logo = styled.span`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--main-color);
  border: 2px solid var(--second-text-color);
  transition: all 0.3s;
`

const LogoWrapper = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.3s all;
  font-family: 'Days One', sans-serif;

  & span {
    font-family: 'Days One', sans-serif;
  }

  &:before {
    content: 'S';
    position: absolute;
    left: 16px;
    top: 9px;
    font-size: 1.5rem;
    color: #fff;
  }

  &:hover {
    transform: translateX(2px);

    ${Logo} {
      background: var(--hover-btn-color);
    }
  }

  &:active {
    transform: scale(0.98);
  }
`
const LogOut = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  border: 1px solid var(--main-color);
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s;
  box-shadow: var(--box-shadow-blocks);
  cursor: pointer;
  font-weight: bold;

  & svg path {
    transition: all 0.3s;
  }

  &:hover {
    background-color: var(--main-color);
    color: var(--bloks-color);

    & svg path {
      fill: var(--bloks-color)
    }
  }

  &:active {
    background-color: var(--hover-btn-color)
  }
`