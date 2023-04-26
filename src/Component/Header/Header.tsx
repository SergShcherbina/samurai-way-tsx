import './header.module.css';
import s from "./header.module.css"
import {NavLink} from "react-router-dom";
import {InitialAuthType} from "../redax/auth-reducer";
import {ReactNode} from "react";
type HeaderType = {
    isAuth: boolean,
    login: string,
}

export const Header = (props: HeaderType) => {
    console.log(props.isAuth)
    return (
        <header className={s.header}>
            <a href="#" ><img src="https://pngicon.ru/file/uploads/google.png"/></a>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login :
                <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

