import classes from "./ProfileInfo.module.css"
import "../../../index.css"
import { Spinner } from "../../assets/spinner/Spinner"
import {PostsType} from "../../../App";

export type ProfileInfoType = {
    profile: GetProfileType
}
export type GetProfileType = {
    aboutMe: string
    contacts: ProfileContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: { small: string, large: string }
    userId: number
}
type ProfileContactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string
}


export const ProfileInfo = (props: ProfileInfoType) => {
    console.log(props)
    let pathAva;
    if (Object.keys(props.profile).length === 0 || props.profile.photos.large === null) {
        pathAva = "https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg"
    } else {
        pathAva = props.profile.photos.large
    }

    return (
        < >
            <div>
                <img className={classes.contentBanner}
                    src="https://img.freepik.com/free-vector/sunset-landscape-with-lake-clouds-on-red-sky-silhouettes-on-hills-and-trees-on-coast_107791-4670.jpg?w=2000" />
            </div>
            {
                !props.profile.photos ? <Spinner /> :

                    <div className={classes.profileInfo}>
                        <div className="boxShadowEl">
                            <img className={classes.avatar}
                                src={pathAva}
                            />
                        </div>
                        <div className={classes.profileDescr + ' ' + 'boxShadowEl'} >
                            <span style={{ fontSize: 26, fontWeight: 'bold' }}> {props.profile.aboutMe} </span>
                        </div>
                    </div>
            }
        </>
    )
}