import React, {ComponentPropsWithoutRef, forwardRef} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import Ava from '../../../assets/img/min-avatar.jpg'
import {UserType} from "../../../pages/users/model/users-types";

type Props = {
    friend: UserType
} & ComponentPropsWithoutRef<'a'>

export const Friend = forwardRef<HTMLAnchorElement | null, Props>(
    ({friend, ...rest}, ref) => {

        const lengthName = friend.name.length > 23 ? friend.name.slice(0, 22) + '...' : friend.name;

        return (
            <RootLink to={`/profile/${friend.id}`} ref={ref} {...rest}>
                <img alt="photo friends" src={friend.photos.small ?? Ava}/>
                <Description>
                    <div>{lengthName}</div>
                    <div>{friend.status}</div>
                </Description>
            </RootLink>
        );
    });


const Description = styled.div`
  & div:last-child {
    font-size: 0.8rem;
    color: var(--second-text-color);
  }
`
const RootLink = styled(Link)`
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 10px;

  & img {
    border-radius: 100%;
    height: 35px;
    width: 35px;
    transition: all 0.2s;
  }

  &:hover {
    img {
      transform: translateX(-3px);
    }
  }
`
