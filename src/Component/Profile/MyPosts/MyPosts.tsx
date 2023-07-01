import classes from './myPosts.module.css';
import {Post} from "./Post/Post";
import React from 'react'
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {PostsType} from "../../../App";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../FormControls/Textarea";
import {requiredField} from "../../../utils/validators/validators";


export type MyPostType = {
    addPost: (values: string) => void
    posts: PostsType[]
    newPostText: string
}

//создаем уточняющую типизацию возвращаемого объекта form по именам input/Field
export type AddPostFormDataType = {
    addPostProfile: string
}

export const MyPosts: React.FC<MyPostType> = (
    {
        addPost,
        posts,
    }) => {
    let [refDivAnimate]: any = useAutoAnimate()

    const onSubmit = (values: AddPostFormDataType) => {
        //получаем значение из формы через имя самой формы
        addPost(values.addPostProfile)
    }

    const postElement = posts
        .map((el) => (
            <Post
                id={el.id}
                key={el.id}
                message={el.message}
                counterLike={el.likeCounter}
                counterDislike={el.counterDislike}/>
        ))

    return (
        <div>
            <h3>My Post</h3>
            <div className={classes.textAreaBlock}>
                <AddPostReduxForm onSubmit={onSubmit}/>
            </div>
            <div ref={refDivAnimate}>
                {
                    postElement
                }
            </div>
        </div>
    )
}

//импортируем InjectedFormProps из redux-form в <джинериках> уточняющий type
const AddPostForm: React.FC<InjectedFormProps<AddPostFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field
                    component={Textarea}
                    name='addPostProfile'
                    validate={[requiredField]}
                    placeholder="Введите текст"/>
            </div>
            <button className={classes.button}> Send </button>
        </form>
    )
}
//типизация возвращаемого значения формы
const AddPostReduxForm = reduxForm<AddPostFormDataType>({form: 'addPostProfile'})(AddPostForm)