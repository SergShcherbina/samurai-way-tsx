import {setAuthAC, setAuthUserDataAC, setCaptchaAC} from "./auth-actions";

export type AuthStateType = {
    userId: number;
    email: string;
    login: string;
    isAuth: boolean;
    captcha: string
};

export type CaptchaResponseType = {
    url: string
};

export type ResponseType<T = {}> = {
    data: T
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
};

export type AuthType = {
    id: number,
    login: string,
    email: string
};

type SetUserDataAT = ReturnType<typeof setAuthUserDataAC>;
export type SetAuthLoginAT = ReturnType<typeof setAuthAC>;
type SetCaptchaAT = ReturnType<typeof setCaptchaAC>

export type AuthActionType = SetUserDataAT | SetAuthLoginAT | SetCaptchaAT;