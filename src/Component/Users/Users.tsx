import React from 'react';
import {UsersType} from "../redax/users-reducer";

type UsersComponentType = {
    users: UsersType[],
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setUsers: (users: UsersType) => void
}


export const Users = (props: UsersComponentType) => {

    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img style={{width: "40px"}} src={user.photoUrl}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => { props.follow(user.id) }}>Unfollow</button>
                            : <button onClick={() => { props.unFollow(user.id) }}> Follow  </button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.foolName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};



