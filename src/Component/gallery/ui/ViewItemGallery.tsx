import React, {FC, useEffect} from 'react';
import styled from "styled-components";
import {ReactionBlock} from "../../reactionBlock/ReactionBlock";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType, store} from "../../../app/model/store";
import {PhotosGalleryType} from "../model/gallery-types";
import {Dispatch} from "redux";
import {galleryActionCreators} from "../model/gallery-action-creators";

type PropsType = {
    activeId: number
    open: boolean
    onClose: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const ViewItemGallery: FC<PropsType> = ({activeId, open, onClose}) => {
    const photos = useSelector<AppStateType, PhotosGalleryType[]>(state => state.gallery.photos);
    const dispatch: Dispatch = useDispatch();

    const activeImg = photos.find(photo => photo.id === activeId)

    const likeHandler = (id: string) => {
        dispatch(galleryActionCreators.likedAC(Number(id)));
    };

    const dislikeHandler = (id: string) => {
        dispatch(galleryActionCreators.dislikedAC(Number(id)));
    };

    useEffect(() => {
        console.log('useEffect')
        dispatch(galleryActionCreators.setViewsAC(Number(activeId)));
    }, [activeId]);

    return (
        <>
            {open && activeImg &&
                <Backdrop onClick={(e) => onClose(e)}>
                    <Wrapper>
                        <ImgWrap>
                            <img src={activeImg.url} alt={activeImg.title}/>
                        </ImgWrap>

                        <Descriptions>
                            {activeImg?.title}
                        </Descriptions>

                        <ReactionBlock
                            id={String(activeImg.id)}
                            like={activeImg.like}
                            dislike={activeImg.dislike}
                            watch={activeImg.watch}
                            likeHandler={likeHandler}
                            dislikeHandler={dislikeHandler}
                        />
                    </Wrapper>
                </Backdrop>
            }
        </>
    );
};

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.39);
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 440px;
  height: fit-content;
  background-color: var(--block-color);
  border-radius: var(--border-radius);
  padding: 20px;
`

const ImgWrap = styled.div`
  height: 400px;
  width: 400px;
  user-select: none;

  & img {
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
`
const Descriptions = styled.h4`
  margin: 20px 0;
`