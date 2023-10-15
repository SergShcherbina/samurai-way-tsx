import React from 'react';
import {Spinner} from "../../../../assets/spinner/Spinner";
import classes from "./ProfileInfo.module.css";
import {ResponseProfileType} from "../../api/profile-api";

type Props = {
    isMyPage: boolean
    profile: ResponseProfileType
}

export const ProfileAvatar = (props: Props) => {

    let pathAva;
    if (Object.keys(props.profile).length === 0 || props.profile.photos === null) {
        pathAva = "https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg";
    } else {
        pathAva = props.profile.photos.large;
    }

    return (
        <>
            {!props.profile.photos ? <Spinner/> :
                <div className={classes.profileInfo}>
                    <div className={` boxShadowEl  ${classes.wrapperAvatar}`}>
                        <img className={classes.avatar} src={pathAva} alt={'avatar'}/>
                    </div>
                </div>
            }
        </>
    )
}