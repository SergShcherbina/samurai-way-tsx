import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Spinner} from "../../spinner/Spinner";
import {BlockTitle} from "../../BlockTitle/BlockTitle";
import {ItemGallery} from "./ItemGallery";
import {getPhotosTC} from "../model/gallery-reducer";
import {useAppDispatch} from "../../../common/hoocs/useAppDiapatch";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../app/model/store";
import {GalleryStateType} from "../model/gallery-types";
import {ViewItem} from "./ViewItem";

export const Gallery = () => {
    const [activeImgId, setActiveImgId] = useState<number>()
    const [open, setOpen] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const dataPhotos =
        useSelector<AppStateType, GalleryStateType>(state => state.gallery)

    useEffect(() => {
        dispatch(getPhotosTC())
    }, []);

    const activeImg = dataPhotos.photos.find(photo => photo.id === activeImgId)

    const onActiveImg = (id: number) => {
        setActiveImgId(id)
        setOpen(true)
    }

    const onClose = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setOpen(false)
        }
    }

    return (
        <>
            <BlockTitle title={'My gallery'}/>
            {dataPhotos.isLoading
                ?
                <Spinner/>
                :
                <List>
                    {dataPhotos.photos.map(item =>
                        <ItemGallery
                            id={item.id}
                            img={item.thumbnailUrl}
                            title={item.title}
                            key={item.id}
                            onActiveImgId={onActiveImg}
                        />)}
                </List>
            }

            {activeImg &&
                <ViewItem
                    urlImg={activeImg.url}
                    title={activeImg.title}
                    open={open}
                    onClose={onClose}
                />
            }
        </>
    )
};

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;

  background-color: var(--block-color);
  border-radius: var(--border-radius);
  padding: 20px;
`

