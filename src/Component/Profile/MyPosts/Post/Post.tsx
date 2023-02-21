import './post.css';

type TypeProps = {
    message?: string,
    counterLike?: number,
    counterDislike?: number,
    id: number
}

export const Post = (props: TypeProps) => {
    return (
        <div className="item_post">
            <div style={{color: "gray"}}>post1</div>
            <img src="https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg"/>
            <span>{props.message}</span>
            <br/>
            <span className="like-wrapper">
                <span>
                    <img
                        className="img"
                        src="https://imgpng.ru/d/like_PNG14.png"/> {props.counterLike}
                </span>
                <span>
                    <img
                        className="img"
                        src="https://w7.pngwing.com/pngs/403/351/png-transparent-dislike-button-thumb-signal-smiley-thumbs-down-s-text-computer-presentation-thumbnail.png"/> {props.counterDislike}
                </span>
            </span>
        </div>
    )
}