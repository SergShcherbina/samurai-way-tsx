import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redax/profile-reducer";
import {MyPosts} from "./MyPosts";
import {store} from "../../redax/redux-store";

export type MyPostTypeContainer = {
    store: any
}

export const MyPostContainer: React.FC<MyPostTypeContainer> = (props) => {
    const state = props.store.getState();

    const addPost = () => {
        if(state.profilePage.newPostText.trim() === '') {
            return;
        } else {
            store.dispatch(addPostActionCreator());
        }
    }
    const onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text);
        store.dispatch(action)
    }
    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}/>
    )
}