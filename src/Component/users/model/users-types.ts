import {usersActionCreators} from "./users-action-creators";

export type usersState = {
    users: UserType[];
    pageSize: number;
    totalItemsCount: number;
    currentPage: number;
    isFetching: boolean;
    disableBtnFollow: number[];
    friends: UserType[]
    friendsCount: number
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
};

export type UsersResponseType = {
    error: null | string
    items: UserType[]
    totalCount: number
}

export type AuthType = {
    id: 28520,
    login: string,
    email: string
}

type FollowAT = ReturnType<typeof usersActionCreators.followSuccess>;
type UnFollowAT = ReturnType<typeof usersActionCreators.unFollowSuccess>;
type SetUsersAT = ReturnType<typeof usersActionCreators.setUsers>;
type SetCurrentPageAT = ReturnType<typeof usersActionCreators.setCurrentPage>;
type SetTotalItemsCountAT = ReturnType<typeof usersActionCreators.setTotalItemsCount>;
type SetFetchingAT = ReturnType<typeof usersActionCreators.setFetching>;
type ToggleDisableBtnFollowType = ReturnType<typeof usersActionCreators.toggleDisableBtnFollow>;
type SetFriendsAT = ReturnType<typeof usersActionCreators.setFriendsAC>

export type UsersActionType =
    | FollowAT
    | SetUsersAT
    | UnFollowAT
    | SetCurrentPageAT
    | SetTotalItemsCountAT
    | SetFetchingAT
    | ToggleDisableBtnFollowType
    | SetFriendsAT;
