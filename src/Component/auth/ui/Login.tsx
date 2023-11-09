import React from "react";
import {LoginReduxForm, LoginReduxFormType} from "./LoginReduxForm";
import {Redirect} from "react-router-dom";
import styled from "styled-components";

type LoginProps = {
    loginTC: ({}: LoginReduxFormType) => void;
    isAuth: boolean;
    captcha: string
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
            <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
        </Root>
    );
};

const Root = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);

  border-radius: 10px;
  border: 3px solid #b5bbd0;
  box-shadow: 0 0 5px 1px var(--main-color);
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