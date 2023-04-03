import React from 'react';
import {UsersType} from "../redax/users-reducer";
import s from './users.module.css'
import axios from "axios";
import avaUser from '../assets/img/avatarUser.png'

type UsersComponentType = {
    users: UsersType[],
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: UsersType[]) => void
}

export class Users extends React.Component<UsersComponentType>{
    constructor(props: UsersComponentType) {
        super(props);
    }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")        //делаем запрос на сервер
            .then(response => {
                this.props.setUsers(response.data.items)                           //сетаем в state.users
            });
    }

    render () {
        return (
            <div className={s.wrapperUsers}>
                {this.props.users.map(user => <div key={user.id} className={s.userItem}>
                    <div className={s.userIcon}>
                        <div>
                            <img  style={{width: '40px'}} src={user.photos.small ? user.photos.small : avaUser }/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => { this.props.follow(user.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.unFollow(user.id) }}> Follow  </button> }
                        </div>
                    </div>
                    <div className={s.userContent}>
                        <div className={s.userNameWrapper}>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div className={s.userNameWrapper}>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </div>
                    </div>
                </div>)}
            </div>
        );
    }
}

