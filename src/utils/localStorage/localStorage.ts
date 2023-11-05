import {ProfilePageType} from "../../Component/profile/model/profile-reducer";

export const setLocalStorage = (profilePage: ProfilePageType) => {
    try {
        localStorage.setItem('profilePage', JSON.stringify(
            {profilePage: profilePage}
        ))
    } catch (err) {
        return undefined
    }
};

export const getLocalStorage = () => {
    try {
        const persistedState = localStorage.getItem('profilePage')
        if (persistedState !== null) {
            return JSON.parse(persistedState)
        }
    } catch (err) {
        return undefined
    }
};
