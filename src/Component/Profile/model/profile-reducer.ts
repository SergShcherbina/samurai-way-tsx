import { Dispatch } from "redux";
import {profileAPI, ProfileResponseType} from "../api/profile-api";


const initialState: ProfilePageType = {
  posts: [],
  newPostText: "",
  profile: {},
  status: "",
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
  switch (action.type) {
    case "ADD-POST":
      if (action.values === "") {
        return state;
      } else {
        let newPostObj = { id: 6, message: action.values, likeCounter: 0, counterDislike: 0 };
        return {
          ...state,
          posts: [newPostObj, ...state.posts],
          newPostText: "",
        };
      }
    case "SET-PROFILE": {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case "SET-STATUS":
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const addPostAC = (values: string) => {
  return {
    type: "ADD-POST",
    values,
  } as const
};
export const setProfileAC = (profile: ProfileResponseType) => {
  return {
    type: "SET-PROFILE",
    profile,
  } as const;
};
export const setStatusAC = (status: string) => {
  return {
    type: "SET-STATUS",
    status,
  } as const;
};

export const setUserProfileTC = (userId: number) => {
  return (dispatch: Dispatch) => {
    profileAPI
      .getProfile(userId)
      .then((response) => {
        dispatch(setProfileAC(response));
      })
      .catch((err) => {
        console.log("ОШИБКА setUserProfile:", err);
      });
  };
};

export const getStatusTC = (userId: number) => {
  return (dispatch: Dispatch) => {
    profileAPI
      .getStatus(userId)
      .then((response) => {
        dispatch(setStatusAC(response.data));
      })
      .catch((err) => {
        console.log("ОШИБКА getStatus");
      });
  };
};

export const updateStatusTC = (status: string) => {
  return (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
         dispatch(setStatusAC(status));
    });
  };
};

export type ProfilePageType = {
  posts: PostsType[];
  newPostText: string;
  profile: any;
  status: string;
};
export type PostsType = {
  id: number;
  message: string;
  likeCounter: number;
  counterDislike: number;
};
export type AddPostAT = ReturnType<typeof addPostAC>
type SetUserProfileAT = ReturnType<typeof setProfileAC>;
type SetStatusAT = ReturnType<typeof setStatusAC>;

export type ActionType = AddPostAT | SetUserProfileAT | SetStatusAT;
