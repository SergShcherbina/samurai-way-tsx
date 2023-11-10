import React, {FC, useState} from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil} from "@fortawesome/free-solid-svg-icons";
import {AboutMeForm, AboutMeReduxFormType} from "./AboutMeForm";
import {useDispatch} from "react-redux";
import {updateProfileInfo} from "../../model/profile-actions";
import {ResponseProfileType} from "../../model/profile-types";

type PropsType = {
    isMyPage: boolean
    profile: ResponseProfileType
}

export const AboutMe: FC<PropsType> = ({isMyPage, profile}) => {
    const {fullName, aboutMe , lookingForAJob, contacts, lookingForAJobDescription} = profile
    const [editMode, setEditMode] = useState<boolean>(false);
    const dispatch = useDispatch();

    const onSubmit = (values: AboutMeReduxFormType) => {

        dispatch(updateProfileInfo(values))
        setEditMode(false)
    }

    const onClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(e.currentTarget === e.target){
            setEditMode(false)
        }
    }

    return (
        <>
            {editMode
                ?
                <Backdrop onClick={onClose}>
                    <AboutMeForm
                        onSubmit={onSubmit}
                        initialValues={profile}/>
                </Backdrop>
                :
                <Info>
                    <li><b>Name:</b> {fullName}</li>
                    <li><b>About me:</b> {aboutMe || 'No information'}</li>
                    <li><b>Looking for a job:</b> {lookingForAJob ? '✅' : '❎' || 'No information'}</li>
                    <li><b>Looking for a job description:</b> {lookingForAJobDescription || 'No information'}</li>
                    <li><b>facebook:</b> {contacts.facebook || 'facebook.com'}</li>
                    <li><b>github:</b> {contacts.github || 'github.com'}</li>
                    <li><b>instagram:</b> {contacts.instagram || 'instagram.com'}</li>
                    <li><b>vk:</b> {contacts.vk || 'vk.com'}</li>
                    <li>
                        {isMyPage && <EditButton icon={faPencil} onClick={() => setEditMode(true)}/>}
                    </li>
                </Info>
            }
        </>
    )

};

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.30);
  backdrop-filter: blur(5px);
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
`
const Info = styled.ul`
  list-style-type: none;
  margin-left: 40px;
  position: relative;

  & li {
    line-height: 30px;

    & b {
      font-size: 1rem;
    }

    &:nth-child(4) {
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 5px;
      margin-bottom: 5px;
    }
  }
`
const EditButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0 3px var(--border-color);
  }

  &:active {
    box-shadow: inset 0 0 3px var(--border-color);
  }
`