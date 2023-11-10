import {galleryApi} from "../api/gallery-api";
import {Dispatch} from "redux";
import {galleryActions} from "./gallery-actions";
import {GalleryActionsType, GalleryStateType} from "./gallery-types";

const initialGalleryState: GalleryStateType = {
    photos: [],
    isLoading: false
}

export const galleryReducer = (state = initialGalleryState, action: GalleryActionsType) => {
    switch (action.type) {
        case 'GALLERY/GET-PHOTOS':
            return {
                ...state, photos: action.payload
                    .map(photo => ({...photo, like: 0, dislike: 0, watch: 0}))
            };
        case 'GALLERY/IS-LOADING':
            return {
                ...state, isLoading: action.payload
            };
        case 'GALLERY/LIKED':
            return {
                ...state, photos: state.photos
                    .map(photo => photo.id === action.payload ? {...photo, like: photo.like + 1} : photo)
            }
        case 'GALLERY/DISLIKED':
            return {
                ...state, photos: state.photos
                    .map(photo => photo.id === action.payload ? {...photo, dislike: photo.dislike + 1} : photo)
            }
        case 'GALLERY/VIEWS':
            return {
                ...state, photos: state.photos
                    .map(photo => photo.id === action.payload ? {...photo, watch: photo.watch + 1} : photo)
            }
        default:
            return state
    }
}

export const getPhotosTC = () => {
    return async (dispatch: Dispatch) => {
        dispatch(galleryActions.loadingAC(true))
        try {
            const res = await galleryApi.getPhotos()
            dispatch(galleryActions.getPhotosAC(res))
        } catch (err) {
            console.log('error: getPhotosTC')
        }
        dispatch(galleryActions.loadingAC(false))
    }
}

