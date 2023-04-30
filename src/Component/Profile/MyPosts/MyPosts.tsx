import classes from './myPosts.module.css';
import {Post} from "./Post/Post";
import React, {ChangeEvent} from 'react'
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {PostsType} from "../../../App";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profile-reducer";

export type MyPostType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
    posts: PostsType[]
    newPostText: string
}

export const MyPosts: React.FC<MyPostType> = (
    {
        updateNewPostText,
        addPost,
        posts,
        newPostText
}) => {
    let [refDivAnimate]: any = useAutoAnimate()

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value)
    }

    const onAddPost = () => {
       addPost()
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
                        value={newPostText}
                        onChange={onPostChange}
                        placeholder="Введите текст"/>
                </div>
                <button
                    onClick={onAddPost}
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