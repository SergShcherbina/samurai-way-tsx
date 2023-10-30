import {galleryApi} from "../gallery-api/gallery-api";
import {Dispatch} from "redux";
import {galleryActionCreators} from "./gallery-action-creators";
import {GalleryActionsType, GalleryStateType, ResponseGalleryType} from "./gallery-types";

const initialGalleryState: GalleryStateType = {
    photos: [] as ResponseGalleryType[],
    isLoading: false
}

export const galleryReducer = (state = initialGalleryState, action: GalleryActionsType) => {
    switch (action.type) {
        case 'GALLERY/GET-PHOTOS':
            return {
                ...state, photos: action.payload
            };
        case 'GALLERY/IS-LOADING':
            return {
                ...state, isLoading: action.payload
            }
        default:
            return state
    }
}

export const getPhotosTC = () => {
    return async (dispatch: Dispatch) => {
        dispatch(galleryActionCreators.loadingAC(true))
        try {
            const res = await galleryApi.getPhotos()
            dispatch(galleryActionCreators.getPhotosAC(res))
        } catch (err) {
            console.log('error: getPhotosTC')
        }
        dispatch(galleryActionCreators.loadingAC(false))
    }
}

