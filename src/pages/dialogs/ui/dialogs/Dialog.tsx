import React, {FC} from "react";
import avatarUser from '../../../../assets/img/userAva.jpg'
import styled from "styled-components";

type DialogType = {
    name: string;
    id: number;
    avatar: string
};

export const Dialog: FC<DialogType> = ({name, id, avatar}) => {
    const avatarImg = avatar ? avatar : avatarUser
    const nameUser = name.length > 20 ? name.slice(0, 20) + '...' : name

    return (
        <Root>
            <AvaWrapper>
                <img src={avatarImg} alt={'alt'}/>
            </AvaWrapper>
            <NameUser>{nameUser}</NameUser>
        </Root>
    );
};

const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 10px 10px 0;
  cursor: pointer;
  border-bottom: 1px solid var(--border-color);
  transition: all 0.2s;
  
  &:last-child {
    border: none;
  }
  
  &:hover {
   transform: translateX(-4px);
  }
`

const AvaWrapper = styled.div`
  width: 40px;
  height: 40px;
  
  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`
const NameUser = styled.span`
    font-size: 0.8rem;
`
