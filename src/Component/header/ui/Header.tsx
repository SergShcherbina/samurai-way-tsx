import {NavLink} from "react-router-dom";
import styled from "styled-components";

type HeaderType = {
    isAuth: boolean;
    login: string;
    logoutTC: () => void;
};

export const Header = (props: HeaderType) => {
    return (
        <HeaderStyle>
            <a href="src/Component/Header#">
                <img src="https://pngicon.ru/file/uploads/google.png" alt="img"/>
            </a>
            <LoginBlock>
                {props.isAuth ? (
                    <span>
            <span>{props.login} - </span>
            <button onClick={props.logoutTC}>'LogOut'</button>
          </span>
                ) : (
                    <NavLink to={"/login"}>Login</NavLink>
                )}
            </LoginBlock>
        </HeaderStyle>
    );
};


const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  grid-template: auto / 1fr;
  grid-column: 1 / 3;
  grid-row: 1;
  
  background-color: #ffffff;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 0 20px;
  height: 70px;

  img {
    height: 80px;
`

const LoginBlock = styled.div`

`



