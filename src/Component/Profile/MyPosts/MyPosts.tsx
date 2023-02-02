import classes from './myPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div> My Post</div>
            <div>
                <textarea placeholder="Введите текст"/>
                <button className={classes.button}>Send</button>
            </div>

            <div>
                <Post message="Hi, how are you?" counterLike={25} counterDislike={2}/>
                <Post message="What do you do?" counterLike={30} counterDislike={3}/>
            </div>
        </div>
    )
}