import photo from '../../../../../assets/img/avatarUser.png'
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faEye,
    faHeart, faHeartCrack,
} from '@fortawesome/free-solid-svg-icons'

type TypeProps = {
    message?: string;
    counterLike?: number;
    counterDislike?: number;
    id: number;
};

export const Post = (props: TypeProps) => {
    return (
        <StylePost>
            <NameWrapper>
                <Avatar>
                    <img src={photo} alt={"img"}/>
                </Avatar>
                <Name>
                    <span><b>UserName</b></span>
                    <br/>
                    <span>Published: 10.03.2023, 19:09:18</span>
                </Name>
            </NameWrapper>

            <Content>{props.message}</Content>

            <Icons>
                <span><FontAwesomeIcon icon={faHeart} size={"sm"} /> {props.counterLike}</span>
                <span><FontAwesomeIcon icon={faHeartCrack} size={"sm"}/> {props.counterDislike}</span>
                <span><FontAwesomeIcon icon={faEye} size={"sm"}/> {props.counterDislike}</span>
            </Icons>
        </StylePost>
    );
};

const StylePost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  background-color: var(--color-bloks);
  padding: 20px;
`
const NameWrapper = styled.div`
  display: flex;
  gap: 20px;
`
const Content = styled.div`
  font-size: 0.9rem;
  padding-left: 60px;
  border-left: 2px solid #e8e8e8;
`
const Avatar = styled.div`
  width: 40px;
  height: 40px;
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
