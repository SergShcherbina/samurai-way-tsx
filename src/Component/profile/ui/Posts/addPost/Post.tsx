import Ava from '../../../../../assets/img/min-avatar.jpg'
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faEye,
    faHeart, faHeartCrack,
} from '@fortawesome/free-solid-svg-icons'
import {ResponseProfileType} from "../../../api/profile-api";

type TypeProps = {
    message?: string;
    like?: number;
    dislike?: number;
    watch?: number
    id: string;
    postDate: string;
    postTime: string;
    profile: ResponseProfileType;
    onLikePost: (postId: string) => void;
    onDislikePost: (postId: string) => void;
};

export const Post = (props: TypeProps) => {

    const onLikePost = (postId: string) => {
        props.onLikePost(postId)
    }

    const onDislikePost = (postId: string) => {
        props.onDislikePost(postId)
    }

    return (
        <Root>
            <Header>
                <Avatar>
                    <img src={props.profile.photos.small || Ava} alt={"img"}/>
                </Avatar>
                <Name>
                    <span><b>{props.profile.fullName}</b></span>
                    <br/>
                    <span>Published: {props.postDate}, {props.postTime}</span>
                </Name>
            </Header>

            <Content>{props.message}</Content>

            <Icons>
                <span
                    onClick={()=>onLikePost(props.id)}>
                    <FontAwesomeIcon icon={faHeart} size={"sm"}/> {props.like}
                </span>
                <span
                    onClick={()=>onDislikePost(props.id)}>
                    <FontAwesomeIcon icon={faHeartCrack} size={"sm"}/> {props.dislike}
                </span>
                <span><FontAwesomeIcon icon={faEye} size={"sm"}/> {props.watch}</span>
            </Icons>
        </Root>
    );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  background-color: var(--bloks-color);
  padding: 20px;
`
const Header = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  line-height: 18px;
  margin-bottom: 5px;
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
  & span > b {
    color: var(--main-color);
  }

  & span:last-child {
    color: var(--second-text-color);
    font-size: .8rem;
  }
`
const Content = styled.div`
  padding: 10px;
  line-height: 27px;
  border-top: 1px solid var(--border-color);
`


const Icons = styled.div`
  display: flex;
  gap: 10px;
  align-self: end;

  & span {
    transition: 0.3s all;
    cursor: pointer;

    & svg {
      transition: all 0.3s;
    }

    &:hover {
      transform: translateY(-2px);

      &:nth-child(1) {
        & svg path {
          fill: var(--error-color);
        }
      }

      &:nth-child(2) {
        & svg path {
          fill: var(--main-color);
        }
      }

      &:last-child {
        &:hover {
          transform: translateY(0px);
          cursor: auto;
        }

        & svg {
          transform: rotateX(180deg);
        }
      }

    }
  }
`
