import classes from './myPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostDataType} from "../Profile";
import React, {ChangeEvent, useState} from 'react'
import {useAutoAnimate} from "@formkit/auto-animate/react";

export const MyPosts: React.FC<MyPostDataType> = ({myPostData, addPost}) => {
    const [ valueTextarea, setValueTextarea ] = useState('')
    // let textTextareaRef: any  = React.createRef();
    let [refDivAnimate]: any = useAutoAnimate()

    const onChangeValueTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValueTextarea(e.currentTarget.value)
    }
    const onClickTextarea = () => {
        if(valueTextarea.trim() === '') {
            console.log(valueTextarea.trim())
            return;
        } else {
            setValueTextarea('')
            addPost(valueTextarea);

        }

        // textTextareaRef.current.value = ''
    }
    const postElement = myPostData
        .map((el) => <Post
            id={el.id}
            message={el.message}
            counterLike={el.likeCount}
            counterDislike={el.counterDislike}/>
        )

    return (
        <div>
            <h3>My Post</h3>
            <div className={classes.textAreaBlock}>
                <div>
                    <textarea
                        // ref={textTextareaRef}
                        value={valueTextarea}
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