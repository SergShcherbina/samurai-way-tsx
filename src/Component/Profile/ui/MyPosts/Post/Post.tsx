import s from "./post.module.css";

type TypeProps = {
    message?: string;
    counterLike?: number;
    counterDislike?: number;
    id: number;
};

export const Post = (props: TypeProps) => {
    return (
        <div className={s.wrapperItem}>
            <div>
                <div>
                    <p className={s.title}>post1</p>
                    <img className={s.imgItem} src="https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg" alt={"img"}/>
                </div>
                <div className={s.likeWrapper}>
                    <img className={s.icon} src="https://imgpng.ru/d/like_PNG14.png" alt={"img"}/> {props.counterLike}
                    <img
                        className={s.icon}
                        src="https://w7.pngwing.com/pngs/403/351/png-transparent-dislike-button-thumb-signal-smiley-thumbs-down-s-text-computer-presentation-thumbnail.png"
                        alt={"img"}
                    />{" "}
                    {props.counterDislike}
                </div>
            </div>
            <div className={s.description}>{props.message}</div>
        </div>
    );
};
