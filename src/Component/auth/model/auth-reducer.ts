import {AuthActionType, AuthStateType} from "./autch-types";

const initialState = {
    userId: 0,
    email: "",
    login: "",
    isAuth: false,
    initAuth: false,
    captcha: ''
};

export const authReducer = (state: AuthStateType = initialState, action: AuthActionType): AuthStateType => {
    switch (action.type) {
        case "AUTH/SET-AUTH-USER-DATA":
            return {
                ...state,
                ...action.data,
            };
        case "AUTH/SET-AUTH-LOGIN":
            return {
                ...state,
                isAuth: action.auth,
            };
        case 'AUTH/SET-CAPTCHA':
            return {
                ...state, captcha: action.payload
            }
        default:
            return state;
    }
};
