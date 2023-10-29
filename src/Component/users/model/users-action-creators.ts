import {UserType} from "./users-types";

export const usersActionCreators = {

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
    setFetching:  (loading: boolean) => {
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
    }

}

