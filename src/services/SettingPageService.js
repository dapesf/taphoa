import { httpPost } from "./httpClient";
// import { useNavigate, Navigate } from "react-router-dom";

export function SettingServiceLogout() {
    //const navigate = useNavigate();

    return httpPost("Authentication/LogOut")
        .then((res) => {
            localStorage.removeItem('token');
        })
        .catch((err) => {});
}