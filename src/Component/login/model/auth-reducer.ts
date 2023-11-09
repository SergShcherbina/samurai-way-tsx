import {Dispatch} from "redux";
import {LoginReduxFormType} from "../ui/LoginReduxForm";
import {stopSubmit} from "redux-form";
import {usersActionCreators} from "../../users/model/users-action-creators";
import {authAPI, ResponseLoginType} from "../auth-api/auth-api";
import {AppDispatchType} from "../../../app/model/store";

export type AuthStateType = {
    userId: string;
    email: string;
    login: string;
    isAuth: boolean;
    captcha: string
};
const initialState = {
    userId: "0",
    email: "",
    login: "",
    isAuth: false,
    initAuth: false,
    captcha: ''
};

type SetUserDataAT = ReturnType<typeof setAuthUserData>;
type SetAuthLogin = ReturnType<typeof setAuth>;
type SetCaptchaAT = ReturnType<typeof setCaptchaAC>
type ActionType = SetUserDataAT | SetAuthLogin | SetCaptchaAT;

export const authReducer = (state: AuthStateType = initialState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA":
            return {
                ...state,
                ...action.data,
            };
        case "SET-AUTH-LOGIN":
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

export const setAuthUserData = (userId: string, email: string, login: string, isAuth: boolean) => {
    return {
        type: "SET-AUTH-USER-DATA",
        data: {
            userId,
            email,
            login,
            isAuth,
        },
    } as const;
};

export const setAuth = (auth: boolean) => {
    return {
        type: "SET-AUTH-LOGIN",
        auth,
    } as const;
};

const setCaptchaAC = (url: string) => {
    return {
        type: 'AUTH/SET-CAPTCHA',
        payload: url
    } as const
}

export const authUser = () => {
    return (dispatch: Dispatch) => {
        return authAPI
            .getAuthMe()
            .then((res) => {
                dispatch(usersActionCreators.setFetching(true));
                if (res.data.resultCode === 0) {
                    const {id, email, login} = res.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                } else {
                    if (res.data.messages.length > 0) {
                        console.log(res.data.fieldsErrors[0]);
                    } else {
                        console.log("result code, authUser: some error");
                    }
                }
            })
            .catch((err) => {
                console.log("catch error authUser:", err);
            })
            .finally(() => {
                dispatch(usersActionCreators.setFetching(false));
            });
    };
};
export const loginTC = (dataForm: LoginReduxFormType) => {
    const {login, password, rememberMe, captcha= ''} = dataForm;
    return (dispatch: AppDispatchType) => {
        dispatch(usersActionCreators.setFetching(true));
        authAPI
            .setLogin({email: login, password, rememberMe, captcha})
            .then((res: ResponseLoginType) => {
                console.log(res)
                if (res.resultCode === 0) {
                    void dispatch(authUser());

                } else if (res.resultCode === 10) {
                    dispatch(stopSubmit("login", {_error: res.messages[0]})); //спец action из redux-form)

                    authAPI.getCapchs().then(res => {
                        dispatch(setCaptchaAC(res.data.url))
                    });

                } else {
                    if (res.messages.length > 0) {
                        dispatch(stopSubmit("login", {_error: res.messages[0]})); //спец action из redux-form)
                    } else {
                        alert("loginTC: some error");
                    }
                }
            })
            .catch((e) => {
                debugger
                console.log("loginTC:", e);
                alert(e)
            });
    };
};

export const logoutTC = () => {
    return (dispatch: Dispatch) => {
        authAPI
            .setLogout()
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuth(false));
                    dispatch(setAuthUserData("", "", "", false));
                } else {
                    console.log(`"logoutTC:" ${res.data.messages[0]}`);
                }
            })
            .catch((e) => {
                console.log("logoutTC:", e);
            });
    };
};

