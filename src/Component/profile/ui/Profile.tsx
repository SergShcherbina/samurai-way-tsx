import React from "react";
import classes from "./profile.module.css";
import {ResponseProfileType} from "../api/profile-api";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ConnectMyPost} from "./MyPosts/MyPostsContainer";

export type ProfileType = {
    profile: ResponseProfileType;
    status: string;
    updateStatus: (status: string) => void;
    isMyPage: boolean
    replaceAvatar: (file: File) => void
};

export const Profile = (props: ProfileType) => {
    return (
        <div className={classes.content}>
            <div>
                <ProfileInfo {...props} />
            </div>
            <div>
                <ConnectMyPost/>
            </div>
        </div>
    );
};
