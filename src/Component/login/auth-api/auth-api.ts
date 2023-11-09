import {instance} from "../../../common/common-api/common-api";
import {LoginType} from "../../users/model/users-types";


export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`).then((res) => res);
    },
    setLogin({email, password, rememberMe, captcha}: LoginType) {
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha})
            .then((res) => res.data);
    },
    setLogout() {
        return instance.delete(`/auth/login`).then((res) => res);
    },
    getCapchs() {
        return instance.get<CaptchaResponseType>('/security/get-captcha-url').then(res => res)
    }
};

export type CaptchaResponseType = {
    url: string
}

export type ResponseLoginType = {
    data: { userId: number };
    messages: any[];
    fieldsErrors: any[];
    resultCode: number;
}
