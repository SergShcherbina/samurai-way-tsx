import {ResponseGalleryType} from "./gallery-types";

export const galleryActionCreators = {
    getPhotosAC:  (photos: ResponseGalleryType[]) => {
        return {
            type: 'GALLERY/GET-PHOTOS',
            payload: photos
        } as const
    },
    loadingAC: (isLoad: boolean) => {
        return {
            type: 'GALLERY/IS-LOADING',
            payload: isLoad,
        }
    }
}