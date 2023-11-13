import React from "react";
import {Post} from "./Post";
import {AddPostReduxForm} from "./AddPostForm";
import {MDTPType, MSTPType} from "./PostsContainer";
import styled from "styled-components";

export type MyPostType = MSTPType & MDTPType;
export type AddPostFormDataType = {
    addPost: string;
};

export const Posts: React.FC<MyPostType> = (
    {addPost, posts,setLike, setDislike, deletePost, ...rest}
) => {

    const onSubmit = (values: AddPostFormDataType) => {
        if(values.addPost.trim().length === 0 ) return
        addPost(values.addPost.trim()); //получаем значение из формы через имя самой формы
    };

    const likeHandler = (postId: string) => {
        setLike(postId)
    };

    const dislikeHandler = (postId: string) => {
        setDislike(postId)
    };

    const deletePostHandler = (postId: string) => {
        deletePost(postId)
    }

    const postElement = posts.map((el) => {
            return <Post
                id={el.id}
                key={el.id}
                message={el.message}
                like={el.like}
                dislike={el.dislike}
                watch={el.views}
                postDate={el.postDate}
                postTime={el.postTime}
                profile={{...rest.profile}}
                likeHandler={likeHandler}
                dislikeHandler={dislikeHandler}
                deletePostHandler={deletePostHandler}
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
