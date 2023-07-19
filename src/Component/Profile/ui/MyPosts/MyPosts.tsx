import classes from "./myPosts.module.css";
import {Post} from "./Post/Post";
import React from "react";
import {PostsType} from "../../model/profile-reducer";
import {AddPostReduxForm} from "./addPostForm/AddPostForm";

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
        <div>
            <h3>My Post</h3>
            <div className={classes.textAreaBlock}>
                <AddPostReduxForm onSubmit={onSubmit}/>
            </div>
            <div>{postElement}</div>
        </div>
    );
};
