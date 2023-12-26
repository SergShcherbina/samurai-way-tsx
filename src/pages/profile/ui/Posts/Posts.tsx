import React, {useState} from "react";
import {Post} from "./Post";
import {AddPostReduxForm, FormDataType} from "./AddPostForm";
import {MDTPType, MSTPType} from "./PostsContainer";
import styled from "styled-components";

export type MyPostType = MSTPType & MDTPType;

export const Posts: React.FC<MyPostType> = (
    {addPost, posts,setLike, setDislike, deletePost, ...rest}
) => {
    const [image, setImage] = useState('')

    const onSubmit = (values: FormDataType) => {
        if(values.addPost.trim().length === 0 ) return
        addPost({text: values.addPost.trim(), image}); //получаем значение из формы через имя самой формы
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

    const addImageInPost = (path: string) => {
        setImage(path)
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
                imagePost={el.image}
                profile={{...rest.profile}}
                likeHandler={likeHandler}
                dislikeHandler={dislikeHandler}
                deletePostHandler={deletePostHandler}
            />
        }
    );

    return (
        <>
            <AddPostReduxForm onSubmit={onSubmit} addImageInPost={addImageInPost} avatar={rest.profile.photos.small}/>
            <StylePosts>{postElement}</StylePosts>
        </>
    );
};

const StylePosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px
`
