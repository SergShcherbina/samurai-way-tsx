import React from 'react';
import s from "./friend.module.css";
import {UserType} from "../../../users/model/users-reducer";

type Props = {
    friend: UserType
}
export const Friend: React.FC<Props> = ({friend}) => {
    return (
        <div className={s.wrapperFriend}>
            <img className={s.img}
                 src={friend.photos.small ? friend.photos.small :
                     'https://w7.pngwing.com/pngs/328/501/png-transparent-monkey-runner-computer-icons-monkey-mammal-animals-vertebrate.png'}/>
            <span className={s.name}>{friend.name}</span>
        </div>
    );
};
