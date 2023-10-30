import {galleryActionCreators} from "./gallery-action-creators";

export type GalleryStateType = {
    photos: ResponseGalleryType[],
    isLoading: boolean
}

export type ResponseGalleryType = {
    albumId: number
    id: number
    thumbnailUrl: string
    title: string
    url: string
}

type GetPhotosAT = ReturnType<typeof galleryActionCreators.getPhotosAC>
type LoadingAT = ReturnType<typeof galleryActionCreators.loadingAC>

export type GalleryActionsType = GetPhotosAT | LoadingAT;