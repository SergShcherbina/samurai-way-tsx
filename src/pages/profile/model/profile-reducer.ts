import {v1} from "uuid";
import {ProfileActionType, ProfilePageType} from "./profile-types";

const initialState: ProfilePageType = {
    posts: [
        {
            id: v1(), message: 'The characters Bert and Ernie on Sesame Street were named after ' +
                'Ernie the taxi driver in Frank Capra\'s "It\'s a Wonderful Life.',
            like: 55, dislike: 1, views: 167, postDate: '23.10.2023', postTime: '05:20:55'
        },
        {
            id: v1(), message: 'The average person\'s left hand does 56% of the typing (when using ' +
                'the proper position of the hands on the keyboard; ' + 'Hunting and pecking doesn\'t count!).',
            like: 123, dislike: 0, views: 351, postDate: '21.06.2023', postTime: '01:20:36'
        },
        {
            id: v1(), message: 'The longest one-syllable words in the English language are "scraunched" ' +
                'and "strengthed." Some suggest that "squirreled" could be included, but squirrel is intended ' +
                'to be pronounced as two syllables (squir-rel) according to most dictionaries. "Screeched" and ' +
                '"strengths" are two other long one-syllable words, but they only have 9 ' + 'letters.',
            like: 4, dislike: 0, views: 569, postDate: '03.01.2023', postTime: '02:20:35'
        }
    ],
    newPostText: "",
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: ''
        },
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: null,
        photos: {
            large: '',
            small: '',
        },
        userId: 0,
    },
    status: "",
    errorMessage: null,
};

//reducer
export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {
        switch (action.type) {
            case "PROFILE/ADD-POST":
                let newPostObj = {
                    id: v1(), message: action.values, like: 0, dislike: 0, views: 0,
                    postDate: new Date().toLocaleDateString(),
                    postTime: new Date().toLocaleTimeString()
                };
                return {
                    ...state,
                    posts: [newPostObj, ...state.posts],
                    newPostText: "",
                }
            case  "PROFILE/SET-PROFILE":
                return {
                    ...state,
                    profile: action.profile!,
                };
            case  "PROFILE/SET-STATUS":
                return {
                    ...state,
                    status: action.status,
                };
            case  "PROFILE/REPLACE-PHOTO":
                return {
                    ...state, profile: {...state.profile, photos: action.photos}
                }
            case "PROFILE/SET-LIKE":
                return {
                    ...state, posts: state.posts
                        .map(el => el.id === action.postId ? {...el, like: el.like += 1} : el)
                }
            case "PROFILE/SET-DISLIKE":
                return {
                    ...state, posts: state.posts
                        .map(el => el.id === action.postId ? {...el, dislike: el.dislike += 1} : el)
                }
            case 'PROFILE/ADD_VIEWS':
                return {
                    ...state, posts: state.posts
                        .map(post => post.id === action.payload ? {...post, views: +post.views + 1} : post)
                }
            case 'PROFILE/SET-ERROR':
                return {
                    ...state, errorMessage: action.error
                }
            default:
                return state;
        }
    }
;
