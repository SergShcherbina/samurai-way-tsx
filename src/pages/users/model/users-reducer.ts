import {UsersActionType, usersState} from "./users-types";

const initialState: usersState = {
    users: [],
    pageSize: 10,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    disableBtnFollow: [],
    friends: [],
    friendsCount: 0,
    errorMessage: null
};

export const usersReducer = (state: usersState = initialState, action: UsersActionType): usersState => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map((user) => (user.id === action.userId ? {
                    ...user,
                    followed: !user.followed
                } : user)),
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map((user) => (user.id === action.userId ? {
                    ...user,
                    followed: !user.followed
                } : user)),
            };
        case "SET-USERS":
            return {
                ...state,
                users: action.users,
            };
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state,
                totalItemsCount: action.totalItemsCount,
            };
        case "SET-FETCHING":
            return {
                ...state,
                isFetching: action.loading,
            };
        case "DISABLE-BTN-FOLLOW":
            return {
                ...state,
                disableBtnFollow: action.loading
                    ? [...state.disableBtnFollow, action.userId]
                    : state.disableBtnFollow.filter((id) => id !== action.userId),
            };
        case "SET-FRIENDS" :
            const friendsArr = action.isSearch ? action.users : [...state.friends, ...action.users]
            return {
                ...state, friends: friendsArr, friendsCount: action.friendsCount
            };
        case 'USER/SET-ERROR':
            return {
                ...state, errorMessage: action.payload
            };
        case "AUTH/SET-AUTH-LOGIN":
            return {
                ...state, users: [], friends: []
            }
        default:
            return state;
    }
};

