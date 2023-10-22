import React from "react";
import {LoginReduxForm} from "./LoginReduxForm";
import {Redirect} from "react-router-dom";
import styled from "styled-components";

type LoginReduxFormType = {
    login: string;
    password: string;
    rememberMe: boolean;
};
type LoginProps = {
    loginTC: ({}: LoginReduxFormType) => void;
    isAuth: boolean;
};

export const Login = (props: LoginProps) => {
    const onSubmit = (dataForm: LoginReduxFormType) => {
        props.loginTC(dataForm); //отправляем данные для логинизации
    };

    if (props.isAuth) return <Redirect to={"/profile"}/>;

    return (
        <Root>
            <ul>
                <li>Use general test account credentials</li>
                <li>Email: <b>free@samuraijs.com</b></li>
                <li>Password: <b>free</b></li>
            </ul>
            <LoginReduxForm onSubmit={onSubmit}/>
        </Root>
    );
};

const Root = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);

  background-color: var(--color-bloks);
  border-radius: 10px;
  border: 2px solid var(--border-color);
  box-shadow: 0 0 5px var(--main-color);
  padding: 35px;
  width: 370px;

  & ul {
    list-style-type: none;
    margin-bottom: 25px;

    & li {
      line-height: 40px;
      color: var(--second-text-color);

      & b {
        user-select: text;
      }
    }
  }
`