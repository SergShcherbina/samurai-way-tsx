import React from 'react'
import {addPostActionCreator} from "../../../redax/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redax/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: ( values: string) => {
            dispatch(addPostActionCreator(values))
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)