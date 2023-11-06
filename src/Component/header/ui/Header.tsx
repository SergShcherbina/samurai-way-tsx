import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {ResponseProfileType} from "../../profile-page/api/profile-api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOut} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Button} from "../../Button/button";

type HeaderType = {
    isAuth: boolean;
    userName: string;
    logoutTC: () => void;
    profile: ResponseProfileType
};

export const Header = (props: HeaderType) => {

    const isMyProfile = () => {
        if (props.isAuth) {
            return <Button
                onClick={props.logoutTC}
                variant={'outline'}
            >
                {props.userName} <FontAwesomeIcon icon={faSignOut} size={"xl"}/>
            </Button>
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
            {isMyProfile()}
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

  background-color: var(--block-color);
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