import photo from '../../../../../assets/img/avatarUser.png'
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faEye,
    faHeart, faHeartCrack,
} from '@fortawesome/free-solid-svg-icons'
import {ResponseProfileType} from "../../../api/profile-api";

type TypeProps = {
    message?: string;
    counterLike?: number;
    counterDislike?: number;
    id: number;
    profile: ResponseProfileType;
};

export const Post = (props: TypeProps) => {
    return (
        <Root>
            <Header>
                <Avatar>
                    <img src={props.profile.photos.small || photo} alt={"img"}/>
                </Avatar>
                <Name>
                    <span><b>{props.profile.fullName}</b></span>
                    <br/>
                    <span>Published: 10.03.2023, 19:09:18</span>
                </Name>
            </Header>

            <Content>{props.message}</Content>

            <Icons>
                <span><FontAwesomeIcon icon={faHeart} size={"sm"} /> {props.counterLike}</span>
                <span><FontAwesomeIcon icon={faHeartCrack} size={"sm"}/> {props.counterDislike}</span>
                <span><FontAwesomeIcon icon={faEye} size={"sm"}/> {props.counterDislike}</span>
            </Icons>
        </Root>
    );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  background-color: var(--color-bloks);
  padding: 20px;
`
const Header = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  line-height: 18px;
`
const Content = styled.div`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
`
const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const Name = styled.div`
  
  & span:last-child{
    color: var(--main-color);
    font-size: .8rem;
  }
`

const Icons = styled.div`
  display: flex;
  gap: 10px;
  align-self: end;

  & span {
    transition: 0.3s all;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
    }
  }
`
