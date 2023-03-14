import classes from './profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../App";

type ProfileType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: {type: string}) => void
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={classes.content}>
            <div>
                <ProfileInfo/>
            </div>
            <div>
                <MyPosts
                    posts={props.posts}
                    dispatch={props.dispatch}
                    newPostText={props.newPostText}
                />
            </div>
        </div>
    )
}