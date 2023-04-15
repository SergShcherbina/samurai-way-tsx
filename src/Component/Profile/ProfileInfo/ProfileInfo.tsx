import classes from "./ProfileInfo.module.css"
import "../../../index.css"
import { Spinner } from "../../assets/spinner/Spinner"


export const ProfileInfo = (props: any) => {
    return (
        < >
            <div>
                <img className={classes.contentBanner}
                     src="https://img.freepik.com/free-vector/sunset-landscape-with-lake-clouds-on-red-sky-silhouettes-on-hills-and-trees-on-coast_107791-4670.jpg?w=2000"/>
            </div>
            {
                !props.profile.photos ? <Spinner/> : 
            
            <div className={classes.profileInfo}>
                <div className="boxShadowEl">
                    <img className={classes.avatar}
                        src={props.profile.photos.large}                 
                    />
                </div>
                <div className={classes.profileDescr + ' ' + 'boxShadowEl'} >
                    <span style={{fontSize: 26, fontWeight: 'bold'}}> {props.profile.aboutMe} </span>
                </div>
            </div> 
            }
        </>
    )
}