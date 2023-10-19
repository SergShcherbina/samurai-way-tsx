import React from 'react';
import s from "./friend.module.css";
import {UserType} from "../../../users/model/users-reducer";
import styled from "styled-components";

type Props = {
    friend: UserType
}
export const Friend: React.FC<Props> = ({friend}) => {
    const lengthName = friend.name.length > 10 ? friend.name.slice(0, 10) + '...' : friend.name;

    return (
        <StyleFriend>
            <img className={s.img}
                 alt={'photo friends'}
                 src={friend.photos.small ??
                     'https://w7.pngwing.com/pngs/328/501/png-transparent-monkey-runner-computer-icons-monkey-mammal-animals-vertebrate.png'}/>
            <span>{lengthName}</span>
        </StyleFriend>
    );
};

const StyleFriend = styled.div `
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  & img {
    border-radius: 100%;
    height: 40px;
    width: 40px;
    border: 2px solid var(--main-color);
  }
  
  & span {
    font-size: 0.9rem;
  }
`