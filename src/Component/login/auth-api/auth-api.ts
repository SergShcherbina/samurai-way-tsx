import {instance} from "../../../common/common-api/common-api";
import {LoginType} from "../../users/model/users-types";


export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`).then((res) => res);
    },
    setLogin({email, password, rememberMe}: LoginType) {
        return instance.post(`/auth/login`, {email, password, rememberMe}).then((res) => res);
    },
    setLogout() {
        return instance.delete(`/auth/login`).then((res) => res);
    },
};

