import React from 'react';
import {Spinner} from "../../../../assets/spinner/Spinner";
import {ResponseProfileType} from "../../api/profile-api";
import styled from "styled-components";
import Stub from '../../../../assets/img/avatarUser.png'

type Props = {
    isMyPage: boolean
    profile: ResponseProfileType
}

export const ProfileAvatar = (props: Props) => {
    let avatar = props.profile.photos.large ?  props.profile.photos.large : Stub;

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
  border-radius: 15px 60px;
  overflow: hidden;
  background-color: var(--main-color);

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`