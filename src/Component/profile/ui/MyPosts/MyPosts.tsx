import {Post} from "./Post/Post";
import React from "react";
import {PostsType} from "../../model/profile-reducer";
import {AddPostReduxForm} from "./addPostForm/AddPostForm";
import styled from "styled-components";

export type MyPostType = {
    addPost: (values: string) => void;
    posts: PostsType[];
    newPostText: string;
};
//создаем уточняющую типизацию возвращаемого объекта form по именам input/Field
export type AddPostFormDataType = {
    addPostProfile: string;
};

export const MyPosts: React.FC<MyPostType> = ({addPost, posts}) => {
    const onSubmit = (values: AddPostFormDataType) => {
        addPost(values.addPostProfile);//получаем значение из формы через имя самой формы
    };
    const postElement = posts.map((el) => (
        <Post id={el.id} key={el.id} message={el.message} counterLike={el.likeCounter}
              counterDislike={el.counterDislike}/>
    ));

    return (
        <>
            <h3>My Posts</h3>
            <PostStyle>
                <AddPostReduxForm onSubmit={onSubmit}/>
            </PostStyle>
            <div>{postElement}</div>
        </>
    );
};

const PostStyle = styled.div`
  background-color: var(--color-bloks);
  border-radius: 10px;
  padding: 10px;
`

