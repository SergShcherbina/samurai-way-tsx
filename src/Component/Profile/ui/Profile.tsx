import React from "react";
import classes from "./profile.module.css";
import {ProfileResponseType} from "../api/profile-api";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type ProfileType = {
    profile: ProfileResponseType;
    status: string;
    updateStatus: (status: string) => void;
};

export const Profile = (props: ProfileType) => {
    return (
        <div className={classes.content}>
            <div>
                <ProfileInfo {...props} />
            </div>
            <div>
                <MyPostContainer/>
            </div>
        </div>
    );
};
