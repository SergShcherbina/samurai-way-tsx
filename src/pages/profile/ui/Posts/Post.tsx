import React from 'react'
import Ava from '../../../../assets/img/min-avatar.jpg'
import styled from "styled-components";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {ReactionBlock} from "../../../../component/reaction-block/ReactionBlock";
import {addViewsAC} from "../../model/profile-actions";
import {ResponseProfileType} from "../../model/profile-types";
import {Simulate} from "react-dom/test-utils";

type TypeProps = {
    message?: string;
    like: number;
    dislike: number;
    watch: number
    id: string;
    postDate: string;
    postTime: string;
    profile: ResponseProfileType;
    likeHandler: (postId: string) => void;
    dislikeHandler: (postId: string) => void;
    deletePostHandler: (postId: string) => void;
};

export const Post = React.memo((props: TypeProps) => {
    const dispatch: Dispatch = useDispatch()

    const likeHandler = (postId: string) => {
        props.likeHandler(postId)
    };

    const dislikeHandler = (postId: string) => {
        props.dislikeHandler(postId)
    };

    const deletePostHandler = () => {
        props.deletePostHandler(props.id)
    }

    useEffect(() => {
        dispatch(addViewsAC(props.id))
    }, []);

    return (
        <Root>
            <Header>
                <Avatar>
                    <img src={props.profile.photos?.small || Ava} alt={"img"}/>
                </Avatar>
                <Title>
                    <h4>{props.profile.fullName}</h4>
                    <span>Published: {props.postDate}, {props.postTime}</span>
                </Title>
                <ActionBar onClick={deletePostHandler} >...</ActionBar>
            </Header>

            <Content>{props.message}</Content>

            <ReactionBlock
                id={props.id}
                like={props.like}
                dislike={props.dislike}
                watch={props.watch}
                likeHandler={likeHandler}
                dislikeHandler={dislikeHandler}
            />
        </Root>
    );
});

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  background-color: var(--block-color);
  padding: 20px;
`
const Header = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  line-height: 18px;
  margin-bottom: 5px;
`
const ActionBar = styled.button`
  align-self: flex-start;
  margin-left: auto;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  padding: 0 5px 6px 5px;
  position: relative;

  &:after {
    content: 'delete post';
    position: absolute;
    top: 5px;
    right: 0;
    padding: 5px;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);

    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    width: max-content;
  }

  &:hover:after {
    visibility: visible;
    top: 15px;
    opacity: 1;
    color: var(--error-color);
  }
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
const Title = styled.div`
  & h4 {
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

