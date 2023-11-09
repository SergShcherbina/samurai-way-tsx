import {Dispatch} from "redux";
import {authAPI} from "../auth-api/auth-api";
import {usersActionCreators} from "../../users/model/users-action-creators";
import {LoginReduxFormType} from "../ui/LoginReduxForm";
import {AppDispatchType} from "../../../app/model/store";
import {stopSubmit} from "redux-form";

export const setAuthUserDataAC = (userId: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: "AUTH/SET-AUTH-USER-DATA",
        data: {
            userId,
            email,
            login,
            isAuth,
        },
    } as const;
};

export const setAuthAC = (auth: boolean) => {
    return {
        type: "AUTH/SET-AUTH-LOGIN",
        auth,
    } as const;
};

export const setCaptchaAC = (url: string) => {
    return {
        type: 'AUTH/SET-CAPTCHA',
        payload: url
    } as const
}

export const authMeTC = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await authAPI.getAuthMe()
            dispatch(usersActionCreators.setFetching(true));

            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data;
                dispatch(setAuthUserDataAC(id, email, login, true));
            } else {
                if (response.data.messages.length > 0) {
                    console.log("authMe:", response.data.fieldsErrors[0]);
                } else {
                    console.log("authMe: some error");
                }
            }
        } catch (error) {
            console.log("catch error authUser:", error);
        }

        dispatch(usersActionCreators.setFetching(false));
    };
};

export const loginTC = (dataForm: LoginReduxFormType) => {
    const {login, password, rememberMe, captcha = ''} = dataForm;
    return async (dispatch: AppDispatchType) => {
        try {
            dispatch(usersActionCreators.setFetching(true));
            const response = await authAPI.setLogin({email: login, password, rememberMe, captcha})

            if (response.data.resultCode === 0) {
                void dispatch(authMeTC());

            } else if (response.data.resultCode === 10) {
                dispatch(stopSubmit("login", {_error: response.data.messages[0]})); //спец action из redux-form)

                authAPI.getCaptcha().then(res => {
                    dispatch(setCaptchaAC(res.data.url))
                });
            } else {
                if (response.data.messages.length > 0) {
                    dispatch(stopSubmit("login", {_error: response.data.messages[0]})); //спец action из redux-form)
                } else {
                    alert("loginTC: some error");
                }
            }
        } catch (error) {
            console.log("loginTC:", error);
            alert(error)
        }
    }
};

export const logoutTC = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await authAPI.setLogout()

            if (response.data.resultCode === 0) {
                dispatch(setAuthAC(false));
                dispatch(setAuthUserDataAC(0, "", "", false));
            } else {
                console.log(`"logoutTC:" ${response.data.messages[0]}`);
                alert(response.data.messages[0])
            }
        } catch (e) {
            console.log("logoutTC:", e);
            alert(e)
        }
    };
};

