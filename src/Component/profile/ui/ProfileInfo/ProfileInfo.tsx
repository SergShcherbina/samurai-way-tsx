import styled from "styled-components";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../Profile";
import {ProfileAvatar} from "./ProfileAvatar";
import {ChangeEvent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCameraRotate} from "@fortawesome/free-solid-svg-icons";

export const ProfileInfo = (props: ProfileType) => {
    const {status, isMyPage, ...restProps} = props

    const onReplaceAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.replaceAvatar(e.target.files[0])
        }
    }

    return (
        <WrapperProfile>
            <WrapperBanner>
                <ImgBanner
                    src="https://cdn-images-1.medium.com/max/900/1*HSisLuifMO6KbLfPOKtLow.jpeg"
                />
            </WrapperBanner>
            <WrapperMyProfile>
                <div style={{maxWidth: '250px'}}>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    <ProfileAvatar profile={restProps.profile} isMyPage={isMyPage}/>
                    {props.isMyPage
                        ? <EditPhoto>
                            <FontAwesomeIcon icon={faCameraRotate}/>
                            Edit photo
                            <input
                                type='file'
                                onChange={onReplaceAvatar}
                            />
                        </EditPhoto>
                        : null}
                </div>
                <Info>
                    <span>
                        <b>Name :</b> {restProps.profile.fullName}
                    </span> <br/>
                    <span>
                        <b>About me:</b> {restProps.profile.boutMe || 'no information'}
                    </span><br/>
                    <span>
                        <b>Job:</b> {restProps.profile.lookingForAJob || 'no work'}
                    </span>
                    <hr/>
                    <span>
                        <b>facebook:</b> {restProps.profile.contacts.facebook || 'facebook.com'}
                    </span><br/>
                    <span>
                        <b>github:</b> {restProps.profile.contacts.github || 'github.com'}
                    </span><br/>
                    <span>
                        <b>instagram:</b> {restProps.profile.contacts.instagram || 'instagram.com'}
                    </span><br/>
                    <span>
                        <b>vk:</b> {restProps.profile.contacts.vk || 'vc.com'}
                    </span>
                </Info>
            </WrapperMyProfile>
        </WrapperProfile>
    );
};

const WrapperProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const WrapperBanner = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`

const ImgBanner = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  justify-content: center;
`

const WrapperMyProfile = styled.div`
  padding: 20px;
  background-color: var(--color-bloks);
  border-radius: 10px;

  display: flex;
  gap: 60px;
`

const EditPhoto = styled.label`
  display: block;
  margin: 10px 0 0 50px;
  cursor: pointer;
  
  & input {
    opacity: 0;
    visibility: hidden;
    width: 0;
    height: 0;
  }
`

const Info = styled.div`
  align-self: center;
  
  & span {
    font-size: 0.9rem;
    line-height: 30px;
  }
`
