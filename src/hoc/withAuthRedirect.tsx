import { Redirect } from "react-router-dom";
import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { AppStateType } from "../redax/store";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: AppStateType) => {
  return { isAuth: state.auth.isAuth };
};

//замудреная типизация полученной компоненты обязательно function declaration
export function withAuthRedirect<T>(Component: ComponentType<T>) {
  function RedirectComponent(props: MapStateToPropsType) {
    //вытягиваем isAuth, а остальные пропсы прокидываем в компоненту дальше
    let { isAuth, ...restProps } = props;
    if (!isAuth) return <Redirect to={"/login"} />;

    return <Component {...(restProps as T)} />;
  }

  //коннектим чтобы вытянуть isAuth
  let ConnectAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);
  return ConnectAuthRedirectComponent;
}
