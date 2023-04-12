import {v1} from "uuid";

export type usersState = {
    users: UsersType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}
export type UsersType = {
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
    totalUsersCount: 101,
    currentPage: 1,
    }

type FollowAT = ReturnType<typeof followAC>
type UnFollowAT = ReturnType<typeof unFollowAC>
type SetUsersAT = ReturnType<typeof setUsersAC>
type setCurentPageAT = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCount = ReturnType<typeof setTotalUsersCountAC>

type ActionType = FollowAT | SetUsersAT |  UnFollowAT | setCurentPageAT | setTotalUsersCount;

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
export const  setUsersAC = (users: UsersType[]) => {
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