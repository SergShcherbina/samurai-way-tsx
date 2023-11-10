import {ResponseGalleryType} from "./gallery-types";

export const galleryActions = {
    getPhotosAC: (photos: ResponseGalleryType[]) => {
        return {
            type: 'GALLERY/GET-PHOTOS',
            payload: photos
        } as const
    },
    loadingAC: (isLoad: boolean) => {
        return {
            type: 'GALLERY/IS-LOADING',
            payload: isLoad,
        } as const
    },
    likedAC: (id: number) => {
        return {
            type: 'GALLERY/LIKED',
            payload: id
        } as const
    },
    dislikedAC: (id: number) => {
        return {
            type: 'GALLERY/DISLIKED',
            payload: id
        } as const
    },
    setViewsAC: (id: number) => {
        return {
            type: 'GALLERY/VIEWS',
            payload: id
        } as const
    }
}