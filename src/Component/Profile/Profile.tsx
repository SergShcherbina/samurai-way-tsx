import classes from './profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../App";

export type  MyPostDataType = {
    myPostData: PostDataType[]
    addPost: (valueTextarea: string) => void
}

export const Profile = (props: MyPostDataType) => {
    return (
        <div className={classes.content}>
            <div>
                <ProfileInfo/>
            </div>
            <div>
                <MyPosts myPostData={props.myPostData} addPost={props.addPost}/>
            </div>
        </div>
    )
}