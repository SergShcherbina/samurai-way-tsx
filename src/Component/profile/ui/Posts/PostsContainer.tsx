import {addPostAC, setDislikeAC, setLikeAC} from "../../model/profile-reducer";
import {AppStateType} from "../../../../app/model/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Posts} from "./Posts";
import {reset} from "redux-form";

export type MSTPType = ReturnType<typeof mapStateToProps>;
export  type MDTPType = ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (values: string) => {
            dispatch(addPostAC(values));
            dispatch(reset('addPost'))   //сбрасываем форму по ее названию(reset - из redux-form)
        },
        setLike: (postId: string) => {
            dispatch(setLikeAC(postId))
        },
        setDislike: (postId: string) => {
            dispatch(setDislikeAC(postId))
        }
    };
};

export const ConnectMyPost = connect(mapStateToProps, mapDispatchToProps)(Posts);

