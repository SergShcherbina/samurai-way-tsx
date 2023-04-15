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

type FollowAT = ReturnType<typeof follow>
type UnFollowAT = ReturnType<typeof unFollow>
type SetUsersAT = ReturnType<typeof setUsers>
type setCurentPageAT = ReturnType<typeof setCurrentPage>
type setTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
type setFethingAT = ReturnType<typeof setFething>
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

export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        userId,
    } as const
}
export const unFollow = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId,
    } as const
}
export const  setUsers = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        users,
    } as const
}
export const  setCurrentPage = (pageNumber: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: pageNumber,
    } as const
}
export const  setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalUsersCount: totalUsersCount,
    } as const
}
export const  setFething = (loading: boolean) => {
    return {
        type: "SET-FETHING",
        loading,
    } as const
}