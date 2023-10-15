import styled from "styled-components";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../Profile";
import {ProfileAvatar} from "./ProfileAvatar";
import {ChangeEvent} from "react";


export const ProfileInfo = (props: ProfileType) => {
    const {status, isMyPage, ...restProps} = props

    const onReplaceAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.replaceAvatar(e.target.files[0])
        }
    }

    return (
        <WrapperProfile>
            <WrapperImage>
                <ImgBanner
                    src="https://cdn-images-1.medium.com/max/900/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                />
            </WrapperImage>
            <MyProfileWrapper>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <ProfileAvatar profile={restProps.profile} isMyPage={isMyPage}/>
                <div>
                    {props.isMyPage
                        ? <input
                            type='file'
                            onChange={onReplaceAvatar}
                        /> : null}
                </div>
            </MyProfileWrapper>
        </WrapperProfile>
    );
};

const WrapperProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const WrapperImage = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`

const ImgBanner = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`

const MyProfileWrapper = styled.div`
  padding: 10px;
  background-color: var(--color-bloks);
  border-radius: 10px;
`
