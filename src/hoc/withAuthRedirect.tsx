import { Redirect } from "react-router-dom";
import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { AppStateType } from "../app/model/store";

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
const mapStateToProps = (state: AppStateType) => {
  return { isAuth: state.auth.isAuth };
};

export function withAuthRedirect<T>(Component: ComponentType<T>) {

  function RedirectComponent(props: MapStateToPropsType) {
    const { isAuth, ...restProps } = props;
    if (!isAuth) {
      return <Redirect to={"/login"}/>
    }
    return <Component {...(restProps as T)} />;
  }

  //коннектим чтобы вытянуть isAuth
  const  ConnectAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);
  return ConnectAuthRedirectComponent;
}
