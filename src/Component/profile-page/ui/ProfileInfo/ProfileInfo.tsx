import styled from "styled-components";
import {ProfileStatus} from "./ProfileStatus";
import {ProfilePropsType} from "../ProfilePage";
import {ProfileAvatar} from "./ProfileAvatar";
import {ChangeEvent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCameraRotate} from "@fortawesome/free-solid-svg-icons";
import Background from '../../../../assets/img/social-background.jpg'
import {AboutMe} from "./AboutMe";
import {Button} from "../../../Button/button";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppStateType} from "../../../../app/model/store";
import {UserType} from "../../../users/model/users-types";
import {Dispatch} from "redux";
import {follow, unFollow} from "../../../users/model/users-reducer";

export const ProfileInfo = (props: ProfilePropsType) => {
    const {status, isMyPage, profile, ...restProps} = props
    const friends = useSelector<AppStateType, UserType[]>(state => state.usersPage.friends)
    const dispatch: AppDispatchType = useDispatch();

    const onReplaceAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.replaceAvatar(e.target.files[0])
        }
    }

    const isFriend = friends.find(friend => friend.id === profile.userId)?.followed

    const onFollow = (userId: number) => {
        isFriend ? dispatch(unFollow(userId)) : dispatch(follow(userId))
    }

    const userName = props.profile.fullName.length > 14
        ? 'good mood 😉'
        : props.profile.fullName

    return (
        <WrapperProfile>
            <Banner userName={userName} background={Background}></Banner>
            <Profile>
                <ProfileStatus status={props.status}  isMyPage={props.isMyPage} updateStatus={props.updateStatus}/>
                <Div>
                    <ProfileAvatar profile={profile} isMyPage={isMyPage}/>

                    {props.isMyPage
                        ?
                        <EditPhoto>
                            <Icons icon={faCameraRotate} size={'1x'}/>
                            Edit photo
                            <input
                                type='file'
                                onChange={onReplaceAvatar}
                            />
                        </EditPhoto>
                        :
                        <Button
                            onClick={()=> onFollow(profile.userId)}
                        >{isFriend ? 'unfollow' : 'follow' }</Button>
                    }

                </Div>
                <AboutMe
                    isMyPage={props.isMyPage}
                    profile={profile}
                />
            </Profile>
        </WrapperProfile>
    );
};

const Div = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`

const WrapperProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Banner = styled.div <{ userName: string, background: string }>`
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
  background-color: var(--block-color);
  border-radius: 10px;

  display: grid;
  grid-template: auto / 220px 1fr;
  gap: 20px;
`

const Icons = styled(FontAwesomeIcon)`
  transition: all 0.3s;
`

const EditPhoto = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 7px;
  border-radius: var(--border-radius);
  transition: all 0.3s;

  & input {
    opacity: 0;
    visibility: hidden;
    width: 0;
    height: 0;
  }

  &:hover {
    color: var(--main-color);
    box-shadow: 0 0 5px var(--border-color);
    padding: 10px;

    ${Icons} {
      transform: rotateY(180deg);
    }

  }
  
  &:active {
    box-shadow: inset 0 0 5px var(--border-color);
  }
`

