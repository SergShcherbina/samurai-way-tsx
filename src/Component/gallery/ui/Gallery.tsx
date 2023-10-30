import {useEffect} from "react";
import styled from "styled-components";
import {Spinner} from "../../spinner/Spinner";
import {BlockTitle} from "../../BlockTitle/BlockTitle";
import {ItemGallery} from "./ItemGallery";
import {getPhotosTC} from "../model/gallery-reducer";
import {useAppDispatch} from "../../../common/hoocs/useAppDiapatch";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../app/model/store";
import {GalleryStateType} from "../model/gallery-types";

export const Gallery = () => {
    const dispatch = useAppDispatch()
    const dataPhotos =
        useSelector<AppStateType, GalleryStateType>(state => state.gallery)

    useEffect(() => {
        dispatch(getPhotosTC())
    }, []);

    return (
        <>
            <BlockTitle title={'My gallery'}/>
            {dataPhotos.isLoading
                ?
                <Spinner/>
                :
                <List>
                    {dataPhotos.photos.map(item =>
                        <ItemGallery img={item.thumbnailUrl} title={item.title} key={item.id}/>)}
                </List>}
        </>
    )
};

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;

  background-color: var(--bloks-color);
  border-radius: var(--border-radius);
  padding: 20px;
`

