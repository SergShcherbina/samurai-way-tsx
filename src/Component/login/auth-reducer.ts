import {Dispatch} from "redux";
import {authAPI} from "../../api/api";
import {LoginReduxFormType} from "./ui/LoginReduxForm";
import {setFetching} from "../users/model/users-reducer";
import {stopSubmit} from "redux-form";
import {SetUserProfileAT} from "../profile/model/profile-reducer";

export type InitialAuthType = {
    userId: string;
    email: string;
    login: string;
    isAuth: boolean;
};
const initialState = {
    userId: "0",
    email: "",
    login: "",
    isAuth: false,
    initAuth: false,
};

type SetUserDataAT = ReturnType<typeof setAuthUserData>;
type SetAuthLogin = ReturnType<typeof setAuth>;
type ActionType = SetUserDataAT | SetAuthLogin;

export const authReducer = (state: InitialAuthType = initialState, action: ActionType): InitialAuthType => {
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

export const authUser = () => {
    return (dispatch: Dispatch) => {
        return authAPI
            .getAuthMe()
            .then((res) => {
                //делаем return, чтобы получить promise в месте вызова(для app-reducer)
                dispatch(setFetching(true));
                if (res.data.resultCode === 0) {
                    const {id, email, login} = res.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                } else {
                    if (res.data.messages.length > 0) {
                        console.log(res.data.fieldsErrors[0]);
                    } else {
                        console.log("authUser: some error");
                    }
                }
            })
            .catch((err) => {
                console.log("error authUser:", err);
            })
            .finally(() => {
                dispatch(setFetching(false));
            });
    };
};
export const loginTC = (dataForm: LoginReduxFormType) => {
    const {login, password, rememberMe} = dataForm;
    return (dispatch: Dispatch) => {
        dispatch(setFetching(true));
        authAPI
            .setLogin({email: login, password, rememberMe})
            .then((res) => {
                if (res.data.resultCode === 0) {
                    // @ts-ignore
                    dispatch(authUser());
                } else {
                    if (res.data.messages.length > 0) {
                        dispatch(stopSubmit("login", {_error: res.data.messages[0]})); //спец action из redux-form)
                    } else {
                        console.log("loginTC: Some error");
                    }
                }
            })
            .catch((e) => {
                console.log("loginTC:", e);
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