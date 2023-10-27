import React from 'react';
import {Spinner} from "../../../spinner/Spinner";
import {ResponseProfileType} from "../../api/profile-api";
import styled from "styled-components";
import Ava from '../../../../assets/img/userAva.jpg'

type Props = {
    isMyPage: boolean
    profile: ResponseProfileType
}

export const ProfileAvatar = (props: Props) => {
    let avatar = props.profile.photos.large ?  props.profile.photos.large : Ava;

    return (
        <>
            {!props.profile.photos ? <Spinner/> :
                <AvatarWrapper>
                    <img src={avatar} alt={'avatar'}/>
                </AvatarWrapper>
            }
        </>
    )
}

const AvatarWrapper = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 15px 50px;
  overflow: hidden;
  outline: 1px solid var(--border-color);

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`