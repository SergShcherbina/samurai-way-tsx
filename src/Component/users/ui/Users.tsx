import React from "react";
import s from "./users.module.css";
import avaUser from "../../../assets/img/avatarUser.png";
import {UserType} from "../model/users-reducer";
import {Spinner} from "../../../assets/spinner/Spinner";
import {NavLink} from "react-router-dom";
import {Pagination} from "./pagination/Pagination";

type UsersType = {
    users: UserType[];
    pageSize: number;
    totalItemsCout: number;
    currentPage: number;
    isFetching: boolean;
    disableBtnFollow: number[];
    changeCurrentPage: (pageNumber: number) => void;
    follow: (userId: number) => void;
    unFollow: (userId: number) => void;
};

export const Users = (props: UsersType) => {

    return (
        <div className={s.wrapperUsers}>
            <Pagination
                currentPage={props.currentPage}
                changeCurrentPage={props.changeCurrentPage}
                totalItemsCount={props.totalItemsCout}
                pageSize={props.pageSize}
            />
            {props.isFetching ? <Spinner/> : (
                props.users.map((user) => (
                    <div key={user.id} className={s.userItem}>
                        <div className={s.userIcon}>
                            <div>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img style={{width: "40px"}} src={user.photos.small ? user.photos.small : avaUser}/>
                                </NavLink>
                            </div>
                            <div>
                                {user.followed ? (
                                    <button
                                        //дизейблим кнопку если, в полученном массиве id совпадает с текущим
                                        disabled={props.disableBtnFollow.some((id) => id === user.id)}
                                        //вызываем колбек санки и передаем аргументы
                                        onClick={() => {
                                            props.follow(user.id);
                                        }}
                                    >
                                        Unfollow
                                    </button>
                                ) : (
                                    <button
                                        disabled={props.disableBtnFollow.some((el) => el === user.id)}
                                        onClick={() => {
                                            props.unFollow(user.id);
                                        }}
                                    >
                                        Follow
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className={s.userContent}>
                            <div className={s.userNameWrapper}>
                                <div>
                                    {user.name}
                                    <div>{user.status}</div>
                                </div>
                                <div className={s.userNameWrapper}>
                                    <div>{"user.location.country"}</div>
                                    <div>{"user.location.city"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};
