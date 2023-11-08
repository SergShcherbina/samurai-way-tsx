import {galleryActionCreators} from "./gallery-action-creators";

export type GalleryStateType = {
    photos: PhotosGalleryType[],
    isLoading: boolean
}

export type ResponseGalleryType = {
    albumId: number
    id: number
    thumbnailUrl: string
    title: string
    url: string
}

export type PhotosGalleryType = {
    like: number,
    dislike: number,
    watch: number,
} & ResponseGalleryType

type GetPhotosAT = ReturnType<typeof galleryActionCreators.getPhotosAC>
type LoadingAT = ReturnType<typeof galleryActionCreators.loadingAC>
type LikedAT = ReturnType<typeof galleryActionCreators.likedAC>
type DislikedAT = ReturnType<typeof galleryActionCreators.dislikedAC>
type SetViewsAT = ReturnType<typeof galleryActionCreators.setViewsAC>

export type GalleryActionsType = GetPhotosAT | LoadingAT | LikedAT | DislikedAT | SetViewsAT;