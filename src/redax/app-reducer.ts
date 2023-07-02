import {Dispatch} from "redux";
import {authUser} from "./auth-reducer";

const initialState = {
    initialized: false
}
type InitialStateType = typeof initialState
type InitAppAC = ReturnType<typeof initAppAC>
type AppActionType = InitAppAC

export const appReducer = (state: InitialStateType = initialState, action: AppActionType) => {
    switch (action.type) {
        case 'APP-INIT' :
            return {...state, initialized: action.init }
        default :
            return state
    }
}

const initAppAC = (init: boolean) => ({
    type: 'APP-INIT',
    init
} as const )

export const initAppTC = () => (dispatch: Dispatch) => {
    // @ts-ignore
    const promiseAuthUser = dispatch(authUser())            //из санки authUser возвращаем promise
    Promise.all([promiseAuthUser]).then(()=> {       //и только после его выполнения dispatch init true в state
        dispatch(initAppAC(true))                      //чтобы показывать спиннер до проверки инициализации
    })
}