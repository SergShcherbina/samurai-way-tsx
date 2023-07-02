import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {LoginReduxFormType} from "../Component/Login/LoginForm";
import {setFetching} from "./users-reducer";

export type InitialAuthType = {
    userId: string,
    email: string,
    login: string,
    isAuth: boolean,
}
const initialState = {
    userId: '0',
    email: '' ,
    login: '',
    isAuth: false,
}

type SetUserDataAT = ReturnType<typeof setAuthUserData>
type SetAuthLogin = ReturnType<typeof setAuth>
type ActionType = SetUserDataAT | SetAuthLogin

export const authReducer = (state: InitialAuthType = initialState, action: ActionType): InitialAuthType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {
                ...state,
                ...action.data,
            };
        case "SET-AUTH-LOGIN":
            return {
                ...state, isAuth: action.auth
            }
        default:
                return state
    }
}

export const setAuthUserData = (userId: string, email: string, login: string, isAuth: boolean) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        data: {
            userId, email, login, isAuth
        }
    } as const
}

export const setAuth = (auth: boolean) => {
    return {
        type: 'SET-AUTH-LOGIN',
        auth
    } as const
}

export const authUser = () => {

    return (dispatch: Dispatch) => {
        authAPI.getAuthMe().then(response => {
            dispatch(setFetching(true))
            if(response.data.resultCode === 0){
                const {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            } else {
                console.log(response.data.fieldsErrors[0])
            }
        })
            .catch((err) => {
                console.log('error getAuthMe:', err )
            })
            .finally(()=> {
                dispatch(setFetching(false))
            })
    }
}
export const loginTC = (dataForm: LoginReduxFormType) => {
    const {login, password, rememberMe} = dataForm
    return (dispatch: Dispatch) => {
        dispatch(setFetching(true))
        authAPI.setLogin({email: login, password, rememberMe}).then(res => {
            if(res.data.resultCode === 0){
                // @ts-ignore
                dispatch(authUser())
            } else {
                alert(`'loginTC:' ${res.data.messages[0]}`)
            }
        }).catch(() => {
            console.log('error getAuthMe')
        })
    }
}

export const logoutTC = () => {

    return (dispatch: Dispatch) => {
        authAPI.setLogout().then(res => {
            if(res.data.resultCode === 0){
                dispatch(setAuth(false))
                dispatch(setAuthUserData('', '', '', false))
            } else {

            }
        })
        .catch(() => {
                console.log('error logoutTC')
            })
    }
}
