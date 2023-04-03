import {v1} from "uuid";

export type usersState = {
    users: UsersType[]
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
    users: [
            // {
            //     "name": "Shubert",
            //     "id": 1,
            //     "photos": {
            //         "small": null,
            //         "large": null
            //     },
            //     "status": null,
            //     "followed": false
            // },
            // {
            //     "name": "Hacker",
            //     "id": 2,
            //     "photos": {
            //         "small": null,
            //         "large": null
            //     },
            //     "status": null,
            //     "followed": false
            // }
        ],

    }


type FollowAT = ReturnType<typeof followAC>
type UnFollowAT = ReturnType<typeof unFollowAC>
type SetUsersAT = ReturnType<typeof setUsersAC>

type ActionType = FollowAT | SetUsersAT |  UnFollowAT ;

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
                ...state, users: [...state.users,  ...action.users]
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