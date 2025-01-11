import { httpPost } from "./httpClient";

export function SettingServiceLogout() {

    return httpPost("Authentication/LogOut")
        .then((res) => {
            localStorage.removeItem('token');
            localStorage.removeItem('phone')
        }).catch((err) => {});
}