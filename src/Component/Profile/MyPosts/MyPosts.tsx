import classes from './myPosts.module.css';
import {Post} from "./Post/Post";
import React, {ChangeEvent} from 'react'
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {PostsType} from "../../../App";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redax/state";

type MyPostType = {
    posts: PostsType[]
    dispatch: (action: {type: string, text?: string}) => void
    newPostText: string
}

export const MyPosts: React.FC<MyPostType> = (
    {
      dispatch,
      posts,
      newPostText,
}) => {
    let [refDivAnimate]: any = useAutoAnimate()
    const onChangeValueTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
    }

    const onClickTextarea = () => {
        if(newPostText.trim() === '') {
            return;
        } else {
            dispatch(addPostActionCreator());
        }
    }
    const postElement = posts
        .map((el) => <Post
            id={el.id}
            key={el.id}
            message={el.message}
            counterLike={el.likeCounter}
            counterDislike={el.counterDislike}/>
        )

    return (
        <div>
            <h3>My Post</h3>
            <div className={classes.textAreaBlock}>
                <div>
                    <textarea
                        // ref={textTextareaRef}
                        value={newPostText}
                        onChange={onChangeValueTextarea}
                        placeholder="Введите текст"/>
                </div>
                <button
                    onClick={onClickTextarea}
                    className={classes.button}>Send
                </button>
            </div>
            <div ref={refDivAnimate}>
                {
                    postElement
                }
            </div>
        </div>
    )
}