import classes from './profile.module.css';
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../App";

type ProfileType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: {type: string}) => void
}

export const Profile = (props: any) => {
    return (
        <div className={classes.content}>
            <div>
                <ProfileInfo/>
            </div>
            <div>
                <MyPostContainer store={props.store}/>
            </div>
        </div>
    )
}