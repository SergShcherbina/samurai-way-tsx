import React from "react";
import { LoginReduxForm } from "./LoginForm";
import { Redirect } from "react-router-dom";

export type LoginReduxFormType = {
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
  if (props.isAuth) return <Redirect to={"/profile"} />; //если не залогинен, то редиректим на 'profole'
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
