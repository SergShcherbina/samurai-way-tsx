import classes from './myPosts.module.css';
import {Post} from "./Post/Post";
import React, {ChangeEvent, useState} from 'react'
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {PostsType} from "../../../App";

type MyPostType = {
    posts: PostsType[]
    addPost: (valueTextarea: string) => void
    newPostText: string
    updateNewPostText: (postText: string) => void
}

export const MyPosts: React.FC<MyPostType> = ({
                                                  posts,
                                                  addPost,
                                                  newPostText,
                                                  updateNewPostText }) => {
    let [refDivAnimate]: any = useAutoAnimate()

    const onChangeValueTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.currentTarget.value)
        updateNewPostText(e.currentTarget.value)
    }

    const onClickTextarea = () => {
        if(newPostText.trim() === '') {
            return;
        } else {

            addPost(newPostText);
        }
        // textTextareaRef.current.value = ''
    }
    const postElement = posts
        .map((el) => <Post
            id={el.id}
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