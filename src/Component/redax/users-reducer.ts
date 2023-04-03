import {v1} from "uuid";

export type usersState = {
    users: UsersType[]
}
export type UsersType = {
    id: string,
    message: string,
    status: string,
    followed: boolean,
    foolName: string
    location: LocationType,
    photoUrl: string
}
export type LocationType = {
    city: string,
    country: string
}

const initialState : usersState = {
    users: [
        {id: v1(), message: 'Users 1', followed: false, foolName: 'Dima', status: "i am Boss", location: {city: 'Minsk', country: "Belares"},
            photoUrl:  " https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png "},
        {id: v1(), message: 'Users 2', followed: true, foolName: 'Igor', status: "i am Rusian ", location: {city: 'Moscow', country: "Rus"},
            photoUrl: " https://w7.pngwing.com/pngs/843/694/png-transparent-avatar-female-cartoon-avatar-purple-face-black-hair-thumbnail.png "},
        {id: v1(), message: 'Users 3', followed: false, foolName: 'Serge', status: "i ia from Ukr", location: {city: 'Kiiv', country: "Ukr"},
            photoUrl: "https://w7.pngwing.com/pngs/7/618/png-transparent-man-illustration-avatar-icon-fashion-men-avatar-face-fashion-girl-heroes-thumbnail.png "},
    ]
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

export const followAC = (userId: string) => {
    return {
        type: "FOLLOW",
        userId,
    } as const
}
export const unFollowAC = (userId: string) => {
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