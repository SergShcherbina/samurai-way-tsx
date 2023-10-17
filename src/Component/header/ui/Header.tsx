import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {ResponseProfileType} from "../../profile/api/profile-api";

type HeaderType = {
    isAuth: boolean;
    userName: string;
    logoutTC: () => void;
    profile: ResponseProfileType
};

export const Header = (props: HeaderType) => {
    return (
        <HeaderStyle>
            <LogoWrapper href="/">
                <Logo></Logo>
                <span>Social network</span>
            </LogoWrapper>
            <div>
                {props.isAuth ?
                    (
                        <WrapperUserName onClick={props.logoutTC} imgPath={props.profile.photos.small}>
                            <UserName> выйти  </UserName>
                        </WrapperUserName>
                    ) : (
                        <NavLink to={"/login"}>Login</NavLink>
                    )}
            </div>
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

  background-color: var(--color-bloks);
  border-radius: 10px;
  padding: 0 var(--padding-blocks);
  height: 70px;
  box-shadow: var(--box-shadow-blocks);

  img {
    height: 80px;
`

const Logo = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--main-color);
  box-shadow: var(--box-shadow-blocks);
`

const LogoWrapper = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.3s all;

  &:before {
    content: 'S';
    left: 15px;
    position: absolute;
    color: #fff;
  }

  &:hover {
    transform: scale(0.95);
  }
`

const UserName = styled.span`
  display: inline-block;
  
  &:first-letter {
    text-transform: uppercase
  }
`

const WrapperUserName = styled.span <{imgPath: string}>`
  display: flex;
  gap: 10px;
  align-items: center;
  &:after {
    content: '';
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: var(--box-shadow-blocks);
    transition: 0.3s all;
    background: url(${props => props.imgPath}) center / cover no-repeat;
  }
  &:hover:after{
    transform: scale(0.95);
  }
`