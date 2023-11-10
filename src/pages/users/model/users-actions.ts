import {UserType} from "./users-types";
import {Dispatch} from "redux";
import {usersAPI} from "../api/users-api";
import {AppDispatchType} from "../../../app/model/store";
import {ResultCode} from "../../../common/enums/emuns";

export const usersActions = {
    followSuccess: (userId: number) => {
        return {
            type: "FOLLOW",
            userId,
        } as const;
    },
    unFollowSuccess: (userId: number) => {
        return {
            type: "UNFOLLOW",
            userId,
        } as const;
    },
    setUsers: (users: UserType[]) => {
        return {
            type: "SET-USERS",
            users,
        } as const;
    },
    setCurrentPage: (pageNumber: number) => {
        return {
            type: "SET-CURRENT-PAGE",
            currentPage: pageNumber,
        } as const;
    },
    setTotalItemsCount: (totalItemsCount: number) => {
        return {
            type: "SET-TOTAL-USERS-COUNT",
            totalItemsCount: totalItemsCount,
        } as const;
    },
    setFetching: (loading: boolean) => {
        return {
            type: "SET-FETCHING",
            loading,
        } as const;
    },

    toggleDisableBtnFollow: (loading: boolean, userId: number) => {
        return {
            type: "DISABLE-BTN-FOLLOW",
            userId,
            loading,
        } as const;
    },

    setFriendsAC: (users: UserType[], friendsCount: number, isSearch: boolean = false) => {
        return {
            type: "SET-FRIENDS",
            users,
            friendsCount,
            isSearch,
        } as const
    },

    setErrorAC: (err: string | null) => {
        return {
            type: 'USER/SET-ERROR',
            payload: err,
        } as const
    }
}

export const getUsersTC = (currentPage: number, pageSize: number, valueSearch?: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(usersActions.setErrorAC(null))
        try {
            dispatch(usersActions.setFetching(true));
            dispatch(usersActions.setCurrentPage(currentPage));
            const response = await usersAPI.getUsers(currentPage, pageSize, valueSearch)
            if (response.error) {
                dispatch(usersActions.setErrorAC(response.error))
            } else {
                dispatch(usersActions.setUsers(response.items));
                dispatch(usersActions.setTotalItemsCount(response.totalCount));
            }
        } catch (err: any) {
            console.log("getUsersTC: ", err);
            dispatch(usersActions.setErrorAC(err.message))
        } finally {
            dispatch(usersActions.setFetching(false));
        }
    };
};

export const follow = (userId: number) => {
    return async (dispatch: AppDispatchType) => {
        dispatch(usersActions.setErrorAC(null))
        dispatch(usersActions.toggleDisableBtnFollow(true, userId));
        try {
            const response = await usersAPI.followUser(userId)
            if (response.resultCode === ResultCode.SUCCESS) {
                dispatch(usersActions.followSuccess(userId));
                void dispatch(getFriendsTC(1, '', true))
            } else {
                if (response.fieldsErrors.length > 0) {
                    dispatch(usersActions.setErrorAC(response.fieldsErrors[0]))
                } else {
                    dispatch(usersActions.setErrorAC(response.messages[0]))
                }
            }
        } catch (err: any) {
            console.log("follow: ", err);
            dispatch(usersActions.setErrorAC(err.message))
        } finally {
            //диспатчим loading:false и userId для удаления в disableBtnFollow
            dispatch(usersActions.toggleDisableBtnFollow(false, userId));
        }
    };
};

export const unFollow = (userId: number) => {
    return async (dispatch: AppDispatchType) => {
        dispatch(usersActions.setErrorAC(null))
        dispatch(usersActions.toggleDisableBtnFollow(true, userId));
        try {
            const response = await usersAPI.unFollowUser(userId)
            if (response.resultCode === ResultCode.SUCCESS) {
                dispatch(usersActions.unFollowSuccess(userId));
                void dispatch(getFriendsTC(1, '', true))
            } else {
                if (response.fieldsErrors.length > 0) {
                    dispatch(usersActions.setErrorAC(response.fieldsErrors[0]))
                } else {
                    dispatch(usersActions.setErrorAC(response.messages[0]))
                }
            }
        } catch (err: any) {
            console.log("unFollow: ", err);
            dispatch(usersActions.setErrorAC(err.message))
        } finally {
            dispatch(usersActions.toggleDisableBtnFollow(false, userId));
        }
    };
};

export const getFriendsTC = (page?: number, value?: string, isSearch?: boolean) => {
    return async (dispatch: Dispatch) => {
        dispatch(usersActions.setErrorAC(null))
        try {
            const res = await usersAPI.getFriends(page, value)
            if (res.error) {
                dispatch(usersActions.setErrorAC(res.error))
            } else {
                dispatch(usersActions.setFriendsAC(res.items, res.totalCount, isSearch))
            }
        } catch (err: any) {
            console.error('getFriendsTC:', err)
            dispatch(usersActions.setErrorAC(err.message))
        }
    }
}
