import classes from './profile.module.css';
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../App";
import {AppStateType} from "../redax/redux-store";

type ProfileType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: {type: string}) => void
}

export const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <ProfileInfo/>
            </div>
            <div>
                <MyPostContainer/>
            </div>
        </div>
    )
}