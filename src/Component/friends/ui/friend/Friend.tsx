import React from 'react';
import {UserType} from "../../../users/model/users-reducer";
import styled from "styled-components";

type Props = {
    friend: UserType
}
export const Friend: React.FC<Props> = ({friend}) => {
    const lengthName = friend.name.length > 10 ? friend.name.slice(0, 10) + '...' : friend.name;

    return (
        <StyleFriend>
            <img alt={'photo friends'}
                 src={friend.photos.small ??
                     'https://w7.pngwing.com/pngs/328/501/png-transparent-monkey-runner-computer-icons-monkey-mammal-animals-vertebrate.png'}/>
            <div>
                <div>{lengthName}</div>
                <div>{friend.status}</div>
            </div>

        </StyleFriend>
    );
};

const StyleFriend = styled.div`{
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  & img {
    border-radius: 100%;
    height: 30px;
    width: 30px;
    box-shadow: 0 0 5px var(--second-text-color);
  }

  & div > :last-child {
      font-size: 0.7rem;
      color: var(--second-text-color);
    }
  }
`