import "./header.module.css";
import s from "./header.module.css";
import { NavLink } from "react-router-dom";
type HeaderType = {
  isAuth: boolean;
  login: string;
  logoutTC: () => void;
};

export const Header = (props: HeaderType) => {
  return (
    <header className={s.header}>
      <a href="#">
        <img src="https://pngicon.ru/file/uploads/google.png" alt="img" />
      </a>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <span>
            <span>{props.login} - </span>
            <button onClick={props.logoutTC}>'LogOut'</button>
          </span>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
