import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType, store} from "../../../redax/redux-store";
import {connect} from "react-redux";


const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextActionCreator(text);
             dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)