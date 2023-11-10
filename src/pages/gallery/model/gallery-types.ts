import {galleryActions} from "./gallery-actions";

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

type GetPhotosAT = ReturnType<typeof galleryActions.getPhotosAC>
type LoadingAT = ReturnType<typeof galleryActions.loadingAC>
type LikedAT = ReturnType<typeof galleryActions.likedAC>
type DislikedAT = ReturnType<typeof galleryActions.dislikedAC>
type SetViewsAT = ReturnType<typeof galleryActions.setViewsAC>

export type GalleryActionsType = GetPhotosAT | LoadingAT | LikedAT | DislikedAT | SetViewsAT;