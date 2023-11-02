import React from "react";
import {Post} from "./addPost/Post";
import {AddPostReduxForm} from "./addPost/addPostForm/AddPostForm";
import {MDTPType, MSTPType} from "./PostsContainer";
import styled from "styled-components";

export type MyPostType = MSTPType & MDTPType;

export type AddPostFormDataType = {
    addPost: string;
};

export const Posts: React.FC<MyPostType> = ({addPost, posts,setLike, setDislike, ...rest}) => {
    const onSubmit = (values: AddPostFormDataType) => {
        addPost(values.addPost); //получаем значение из формы через имя самой формы
    };

    const onLikePost = (postId: string) => {
        setLike(postId)
    };

    const onDislikePost = (postId: string) => {
        setDislike(postId)
    };

    const postElement = posts.map((el) => {
            return <Post
                id={el.id}
                key={el.id}
                message={el.message}
                like={el.like}
                dislike={el.dislike}
                watch={el.watch}
                postDate={el.postDate}
                postTime={el.postTime}
                profile={{...rest.profile}}
                onLikePost={onLikePost}
                onDislikePost={onDislikePost}
            />
        }
    );

    return (
        <>
            <AddPostReduxForm onSubmit={onSubmit}/>
            <StylePosts>{postElement}</StylePosts>
        </>
    );
};

const StylePosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px
`