import {v1} from "uuid";

export type usersState = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFething: boolean,
}
export type UserType = {
    name: string,
    id: number,
    photos: PhotoType,
    status: any,
    followed: boolean,
}
export type PhotoType = {
    small: any,
    large: any,
}


const initialState : usersState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFething: false,
    }

type FollowAT = ReturnType<typeof followAC>
type UnFollowAT = ReturnType<typeof unFollowAC>
type SetUsersAT = ReturnType<typeof setUsersAC>
type setCurentPageAT = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountAT = ReturnType<typeof setTotalUsersCountAC>
type setFethingAT = ReturnType<typeof setFethingAC>
type ActionType = FollowAT | SetUsersAT |  UnFollowAT | setCurentPageAT | setTotalUsersCountAT | setFethingAT;

export const usersReducer = (state: usersState = initialState, action: ActionType): usersState => {
    switch (action.type) {
        case "FOLLOW" :
            return {
                ...state, users: state.users.map(user => user.id === action.userId ? {...user, followed: !user.followed} : user )
            }
        case "UNFOLLOW" :
            return {
                ...state, users: state.users.map(user => user.id === action.userId ? {...user, followed: !user.followed} : user )
            }
        case "SET-USERS":
            return {
                ...state, users: action.users
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case "SET-FETHING": 
            return {
                ...state, isFething: action.loading
            } 
        default:
            return state;
    }
}

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId,
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId,
    } as const
}
export const  setUsersAC = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        users,
    } as const
}
export const  setCurrentPageAC = (pageNumber: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: pageNumber,
    } as const
}
export const  setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalUsersCount: totalUsersCount,
    } as const
}
export const  setFethingAC = (loading: boolean) => {
    return {
        type: "SET-FETHING",
        loading,
    } as const
}