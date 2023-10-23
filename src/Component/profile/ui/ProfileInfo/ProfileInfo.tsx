import styled from "styled-components";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../Profile";
import {ProfileAvatar} from "./ProfileAvatar";
import {ChangeEvent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCameraRotate} from "@fortawesome/free-solid-svg-icons";
import Background from '../../../../assets/img/social-background.jpg'

export const ProfileInfo = (props: ProfileType) => {
    const {status, isMyPage, ...restProps} = props

    const onReplaceAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.replaceAvatar(e.target.files[0])
        }
    }

    const userName = props.profile.fullName.length > 14
        ? 'good mood 😉'
        : props.profile.fullName

    return (
        <WrapperProfile>
            <Banner userName={userName} background={Background}></Banner>
            <Profile>
                <ProfileStatus status={props.status} isMyPage={props.isMyPage} updateStatus={props.updateStatus}/>
                <div>
                    <ProfileAvatar profile={restProps.profile} isMyPage={isMyPage}/>
                    {props.isMyPage && <EditPhoto>
                            <FontAwesomeIcon icon={faCameraRotate} size={'1x'}/>
                            Edit photo
                            <input
                                type='file'
                                onChange={onReplaceAvatar}
                            />
                        </EditPhoto>
                    }
                </div>
                <Info>
                    <li><b>Name:</b> {restProps.profile.fullName}</li>
                    <li><b>About me:</b>  {restProps.profile.boutMe || 'No information'}</li>
                    <li><b>Job</b> {restProps.profile.lookingForAJob || 'No information'}</li>
                    <li><b>facebook:</b> {restProps.profile.contacts.facebook || 'facebook.com'}</li>
                    <li><b>github:</b> {restProps.profile.contacts.github || 'github.com'}</li>
                    <li><b>instagram:</b> {restProps.profile.contacts.instagram || 'instagram.com'}</li>
                    <li><b>vk:</b> {restProps.profile.contacts.vk || 'vk.com'}</li>
                </Info>
            </Profile>
        </WrapperProfile>
    );
};

const WrapperProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Banner = styled.div <{userName: string, background: string}>`
  background: url(${props => props.background});
  width: 100%;
  min-height: 200px;
  border-radius: 10px;
  padding: 10px;
  overflow: hidden;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:after {
    content: ' ${props => props.userName} ';
    font-family: 'Days One', sans-serif;
    font-size: 4.5rem;
    color: transparent;
    -webkit-text-stroke: 2px #fff;
    text-shadow: 0 0 5px #fff;
  }
`
const Profile = styled.div`
  padding: 20px;
  background-color: var(--color-bloks);
  border-radius: 10px;

  display: grid;
  grid-template: auto / 220px 1fr;
  gap: 20px;
`

const EditPhoto = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 0;
  cursor: pointer;
  gap: 7px;
  transition: all 0.3s;

  & input {
    opacity: 0;
    visibility: hidden;
    width: 0;
    height: 0;
  }

  &:hover {
    color: var(--main-color)
  }
`

const Info = styled.ul`
  list-style-type: none;
  margin-left: 40px;
  max-width: fit-content;

  & li {
    line-height: 30px;
    //color: var(--second-text-color);

    & b {
      font-size: 1rem;
    }

    &:nth-child(3) {
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 5px;
      margin-bottom: 5px;
    }
  }
`
