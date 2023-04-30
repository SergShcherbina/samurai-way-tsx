import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type InitialAuthType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}
const initialState = {
    id: 0,
    email: '' ,
    login: '',
    isAuth: false,
}

type SetUserDataAT = ReturnType<typeof setAuthUserData>
type ActionType = SetUserDataAT

export const authReducer = (state: InitialAuthType = initialState, action: ActionType): InitialAuthType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            };

            default:
                return state
    }
    return state
}

export const setAuthUserData = (userId: string, email: string, login: string) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        data: {
            userId, email, login
        }
    } as const
}

export const authUser = () => {

    return (dispatch: Dispatch) => {
        usersAPI.getAuthMe().then(response => {
            if(response.resultCode === 0){
                const {id, email, login} = response.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
            .catch(() => {
                console.log('error getAuthMe')
            })
    }

}