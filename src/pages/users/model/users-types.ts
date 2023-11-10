import {usersActions} from "./users-actions";
import {SetAuthLoginAT} from "../../auth/model/auth-types";

export type usersState = {
    users: UserType[];
    pageSize: number;
    totalItemsCount: number;
    currentPage: number;
    isFetching: boolean;
    disableBtnFollow: number[];
    friends: UserType[]
    friendsCount: number
    errorMessage: null | string
};
export type UserType = {
    name: string;
    id: number;
    photos: PhotoType;
    status: string;
    followed: boolean;
};
export type PhotoType = {
    small: string;
    large: string;
};

export type LoginType = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string
};

export type UsersResponseType = {
    error: null | string
    items: UserType[]
    totalCount: number
}

export type ResponseFollowType = {
    data: {}
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}


type FollowAT = ReturnType<typeof usersActions.followSuccess>;
type UnFollowAT = ReturnType<typeof usersActions.unFollowSuccess>;
type SetUsersAT = ReturnType<typeof usersActions.setUsers>;
type SetCurrentPageAT = ReturnType<typeof usersActions.setCurrentPage>;
type SetTotalItemsCountAT = ReturnType<typeof usersActions.setTotalItemsCount>;
type SetFetchingAT = ReturnType<typeof usersActions.setFetching>;
type ToggleDisableBtnFollowType = ReturnType<typeof usersActions.toggleDisableBtnFollow>;
type SetFriendsAT = ReturnType<typeof usersActions.setFriendsAC>
type SetErrorAT = ReturnType<typeof usersActions.setErrorAC>

export type UsersActionType =
    | FollowAT
    | SetUsersAT
    | UnFollowAT
    | SetCurrentPageAT
    | SetTotalItemsCountAT
    | SetFetchingAT
    | ToggleDisableBtnFollowType
    | SetFriendsAT
    | SetErrorAT
    | SetAuthLoginAT;
