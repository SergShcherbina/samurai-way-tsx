import React from 'react';
import {UsersType} from "../redax/users-reducer";
import s from './users.module.css'

type UsersComponentType = {
    users: UsersType[],
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setUsers: (users: UsersType[]) => void
}


export const Users = (props: UsersComponentType) => {

    return (
        <div className={s.wrapperUsers}>
            {props.users.map(user => <div key={user.id} className={s.userItem}>
                <div className={s.userIcon}>
                    <div>
                        <img style={{width: "40px"}} src={user.photoUrl}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => { props.follow(user.id) }}>Unfollow</button>
                            : <button onClick={() => { props.unFollow(user.id) }}> Follow  </button> }
                    </div>
                </div>
                <div className={s.userContent}>
                    <div className={s.userNameWrapper}>
                        <div>{user.foolName}</div>
                        <div>{user.status}</div>
                    </div>
                    <div className={s.userNameWrapper}>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </div>
                </div>
            </div>)}
        </div>
    );
};



