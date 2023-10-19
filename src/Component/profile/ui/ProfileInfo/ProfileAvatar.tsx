import React from 'react';
import {Spinner} from "../../../../assets/spinner/Spinner";
import {ResponseProfileType} from "../../api/profile-api";
import styled from "styled-components";

type Props = {
    isMyPage: boolean
    profile: ResponseProfileType
}

export const ProfileAvatar = (props: Props) => {
    let pathAva;
    if (Object.keys(props.profile).length === 0 || props.profile.photos === null) {
        pathAva = "https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg";
    } else {
        pathAva = props.profile.photos.large;
    }

    return (
        <>
            {!props.profile.photos ? <Spinner/> :
                <AvatarWrapper>
                    <img src={pathAva} alt={'avatar'}/>
                </AvatarWrapper>
            }
        </>
    )
}

const AvatarWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 20px 80px;
  overflow: hidden;

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`