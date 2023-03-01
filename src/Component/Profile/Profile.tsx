import classes from './profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../App";

type ProfileType = {
    posts: PostsType[]
    addPost: (valueTextarea: string) => void
    newPostText: string
    updateNewPostText: (postText: string) => void
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
                    addPost={props.addPost}
                    newPostText={props.newPostText}
                    updateNewPostText={props.updateNewPostText} />
            </div>
        </div>
    )
}