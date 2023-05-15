import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profile-reducer";
import {AddPostFormDataType, MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redax/redux-store";
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
        addPost: ( values: string) => {
            dispatch(addPostActionCreator(values))
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)