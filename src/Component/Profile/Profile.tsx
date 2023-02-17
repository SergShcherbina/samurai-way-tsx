import classes from './profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../App";

export type  MyPostDataType = {
    myPostData: PostDataType[]
}

export const Profile = (props: MyPostDataType) => {
    return (
        <div className={classes.content}>
            <div>
                <ProfileInfo/>
            </div>
            <div>
                <MyPosts myPostData={props.myPostData}/>
            </div>
        </div>
    )
}