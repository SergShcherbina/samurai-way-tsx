import {ProfilePageType} from "../../Component/profile-page/model/profile-reducer";
import {store} from "../../app/model/store";

export const setLocalStorage = () => {
    try {
        localStorage.setItem('stateStorageSN', JSON.stringify(
            {
                profilePage: store.getState().profilePage,
                music: store.getState().music
            }
        ))
    } catch (err) {
        return undefined
    }
};

export const getLocalStorage = () => {
    try {
        const persistedState = localStorage.getItem('stateStorageSN')
        if (persistedState !== null) {
            return JSON.parse(persistedState)
        }
    } catch (err) {
        return undefined
    }
};
