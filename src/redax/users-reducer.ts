import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type usersState = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFething: boolean,
    disableBtnFollow: number[]
}
export type UserType = {
    name: string,
    id: number,
    photos: PhotoType,
    status: string,
    followed: boolean,
}
export type PhotoType = {
    small: string,
    large: string,
}
const initialState: usersState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFething: false,
    disableBtnFollow: [],
}

type FollowAT = ReturnType<typeof followSuccess>
type UnFollowAT = ReturnType<typeof unFollowSuccess>
type SetUsersAT = ReturnType<typeof setUsers>
type setCurentPageAT = ReturnType<typeof setCurrentPage>
type setTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
type setFethingAT = ReturnType<typeof setFething>
type toggleDisableBtnFollowType = ReturnType<typeof toggleDisableBtnFollow>
type ActionType =
    FollowAT
    | SetUsersAT
    | UnFollowAT
    | setCurentPageAT
    | setTotalUsersCountAT
    | setFethingAT
    | toggleDisableBtnFollowType;

export const usersReducer = (state: usersState = initialState, action: ActionType): usersState => {
    switch (action.type) {
        case "FOLLOW" :
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: !user.followed} : user)
            }
        case "UNFOLLOW" :
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? {...user, followed: !user.followed} : user)
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
        case "DISABLE-BTN-FOLLOW":
            return {
                ...state, disableBtnFollow: action.loading
                    ? [...state.disableBtnFollow, action.userId]
                    : state.disableBtnFollow.filter(el => el !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId: number) => {
    return {
        type: "FOLLOW",
        userId,
    } as const
}
export const unFollowSuccess = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId,
    } as const
}
export const setUsers = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        users,
    } as const
}
export const setCurrentPage = (pageNumber: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: pageNumber,
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalUsersCount: totalUsersCount,
    } as const
}
export const setFething = (loading: boolean) => {
    return {
        type: "SET-FETHING",
        loading,
    } as const
}
export const toggleDisableBtnFollow = (loading: boolean, userId: number) => {
    return {
        type: "DISABLE-BTN-FOLLOW",
        userId,
        loading,
    } as const
}

//создаем сан-крейтер, передаем нужные аргументы и возвращаем санку с dispatch
export const getUsersThunkCreater = (currentPage: number, pageSize: number) => {

    return (dispatch: Dispatch) => {
        dispatch(setFething(true))
        dispatch(setCurrentPage(currentPage))
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(setUsers(response.items))
                dispatch(setTotalUsersCount(response.totalCount))
            })
            .catch((err) => {
                console.log('ОШИБКА getUsers')
            })
            .finally(() => {
                dispatch(setFething(false))
            });
    }
}
export const follow = (userId: number) => {

    return (dispatch: Dispatch) => {
        //диспатчим loading:true и userId для добавления в disableBtnFollow
        dispatch(toggleDisableBtnFollow(true, userId))
        usersAPI.followUser(userId)
            .then(response => {
                if(response.resultCode === 0){
                    dispatch(followSuccess(userId))
                }
            })
            .catch((err) => {
                console.log('ОШИБКА FOLLOW')
            }).finally(()=> {
            //диспатчим loading:false и userId для удаления в disableBtnFollow
            dispatch(toggleDisableBtnFollow(false, userId))
        })
    }
}
export const unFollow = (userId: number) => {

    return (dispatch: Dispatch) => {
        dispatch(toggleDisableBtnFollow(true, userId))
        usersAPI.unFollowUser(userId)
            .then(response => {
                if(response.resultCode === 0){
                    dispatch(unFollowSuccess(userId))
                }
            })
            .catch((err) => {
                console.log('ОШИБКА UNFOLLOW')
            }).finally(()=> {
            dispatch(toggleDisableBtnFollow(false, userId))
        })
    }
}
// export const setUserStatus = (userId: number, status: string) => {
//     return (dispatch: Dispatch) => {
//         profileAPI.getStatus(2)
//             .then(response => {
//                 if(response.resultCode === 0){
//                     console.log(response)
//                     // dispatch(setUserStatusAC(userId, status))
//                 }
//             })
//
//     }
// }