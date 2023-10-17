import React from "react";
import {addPostAC} from "../../model/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../../app/model/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (values: string) => {
            dispatch(addPostAC(values));
        },
    };
};

export const ConnectMyPost = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
