import classes from './myPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostDataType} from "../Profile";


export const MyPosts = (props: MyPostDataType) => {
    const postElement = props.myPostData
        .map((el) => <Post
            id={el.id}
            message={el.message}
            counterLike={el.likeCount}
            counterDislike={el.counterDislike}/>
        )

    return (
        <div>
            <h3> My Post</h3>
            <div>
                <div>
                    <textarea placeholder="Введите текст"/>
                </div>
                <button className={classes.button}>Send</button>
            </div>

            <div>
                {
                    postElement
                }
            </div>
        </div>
    )
}