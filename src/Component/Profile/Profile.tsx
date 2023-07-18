import React from "react";
import classes from "./profile.module.css";
import { MyPostContainer } from "./MyPosts/MyPostsContainer";
import { ProfileInfo, ProfileInfoType } from "./ProfileInfo/ProfileInfo";

export const Profile = (props: ProfileInfoType) => {
  return (
    <div className={classes.content}>
      <div>
        <ProfileInfo {...props} />
      </div>
      <div>
        <MyPostContainer />
      </div>
    </div>
  );
};
