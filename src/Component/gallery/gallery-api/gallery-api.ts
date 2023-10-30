import axios from 'axios'
import {ResponseGalleryType} from "../model/gallery-types";

export const galleryApi = {
    getPhotos() {
        return axios
            .get<ResponseGalleryType[]>('https://jsonplaceholder.typicode.com/photos?albumId=1')
            .then(response => response.data )
    },
}
