import {Dispatch} from "redux";
import {AppDispatchType} from "../../../app/model/store";
import {usersActionCreators} from "./users-action-creators";
import {UsersActionType, usersState} from "./users-types";
import {usersAPI} from "../users-api/users-api";

const initialState: usersState = {
    users: [],
    pageSize: 10,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    disableBtnFollow: [],
    friends: [],
    friendsCount: 0,
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
        case "AUTH/SET-AUTH-LOGIN":
            return {
                ...state, users: [], friends: []
            }
        default:
            return state;
    }
};


export const getUsersTC = (currentPage: number, pageSize: number, valueSearch?: string) => {
    return (dispatch: Dispatch) => {
        dispatch(usersActionCreators.setFetching(true));
        dispatch(usersActionCreators.setCurrentPage(currentPage));
        usersAPI
            .getUsers(currentPage, pageSize, valueSearch)
            .then((response) => {
                dispatch(usersActionCreators.setUsers(response.items));
                dispatch(usersActionCreators.setTotalItemsCount(response.totalCount));
            })
            .catch((err) => {
                console.log("ОШИБКА getUsers: ", err);
            })
            .finally(() => {
                dispatch(usersActionCreators.setFetching(false));
            });
    };
};

export const follow = (userId: number) => {
    return (dispatch: AppDispatchType) => {
        dispatch(usersActionCreators.toggleDisableBtnFollow(true, userId));
        usersAPI
            .followUser(userId)
            .then((response) => {
                if (response.resultCode === 0) {
                    dispatch(usersActionCreators.followSuccess(userId));
                    dispatch(getFriendsTC(1, '', true))
                }
            })
            .catch((err) => {
                console.log("ОШИБКА FOLLOW: ", err);
            })
            .finally(() => {
                //диспатчим loading:false и userId для удаления в disableBtnFollow
                dispatch(usersActionCreators.toggleDisableBtnFollow(false, userId));
            });
    };
};

export const unFollow = (userId: number) => {
    return (dispatch: AppDispatchType) => {
        dispatch(usersActionCreators.toggleDisableBtnFollow(true, userId));
        usersAPI
            .unFollowUser(userId)
            .then((response) => {
                if (response.resultCode === 0) {
                    dispatch(usersActionCreators.unFollowSuccess(userId));
                    dispatch(getFriendsTC(1, '', true))
                }
            })
            .catch((err) => {
                console.log("ОШИБКА:  UNFOLLOW: ", err);
            })
            .finally(() => {
                dispatch(usersActionCreators.toggleDisableBtnFollow(false, userId));
            });
    };
};

export const getFriendsTC = (page?: number, value?: string, isSearch?: boolean) => {
    return (dispatch: Dispatch) => {
        usersAPI
            .getFriends(page, value)
            .then(res => {
                dispatch(usersActionCreators.setFriendsAC(res.items, res.totalCount, isSearch))
            })
            .catch(err => {
                alert('error: getFriendsTC:')
            })
    }
}

