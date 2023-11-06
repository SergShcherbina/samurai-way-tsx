import React from "react";
import {ResponseProfileType} from "../api/profile-api";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ConnectMyPost} from "./Posts/PostsContainer";

export type ProfilePropsType = {
    profile: ResponseProfileType;
    status: string;
    updateStatus: (status: string) => void;
    isMyPage: boolean
    replaceAvatar: (file: File) => void
};

export const ProfilePage = (props: ProfilePropsType) => {
    return (
        <>
            <ProfileInfo {...props} />
            {props.isMyPage && <ConnectMyPost/>}
        </>
    );
};
