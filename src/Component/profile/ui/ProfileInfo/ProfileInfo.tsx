import classes from "./ProfileInfo.module.css";
import "../../../../index.css";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../Profile";
import {ProfileAvatar} from "./ProfileAvatar";
import {ChangeEvent} from "react";

export const ProfileInfo = (props: ProfileType) => {
    const {status, isMyPage, ...restProps} = props

    const onReplaceAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files){
            props.replaceAvatar(e.target.files[0])
        }
    }

    return (
        <>
            <div>
                <img className={classes.contentBanner}
                     src="https://img.freepik.com/free-vector/sunset-landscape-with-lake-clouds-on-red-sky-silhouettes-on-hills-and-trees-on-coast_107791-4670.jpg?w=2000"
                />
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <ProfileAvatar profile={restProps.profile} isMyPage={isMyPage}/>
            <div>
                {props.isMyPage
                    ? <input
                        type='file'
                        onChange={onReplaceAvatar}
                    /> : null}
            </div>
        </>
    );
};
