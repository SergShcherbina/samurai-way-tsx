import {instance} from "../../../common/common-api/common-api";
import {LoginType} from "../../users/model/users-types";
import {AuthType, CaptchaResponseType, ResponseType} from "../model/auth-types";

export const authAPI = {
    async getAuthMe() {
        return await instance.get<ResponseType<AuthType>>(`auth/me`);
    },
    async setLogin({email, password, rememberMe, captcha}: LoginType) {
        return await instance.post<ResponseType<{ userId: number }>>(`/auth/login`, {email, password, rememberMe, captcha})
    },
    async setLogout() {
        return await instance.delete<ResponseType>(`/auth/login`)
    },
    async getCaptcha() {
        return await instance.get<CaptchaResponseType>('/security/get-captcha-url')
    }
};
