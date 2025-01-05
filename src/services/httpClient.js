import axios from "axios";

// config http package
let config = {
    headers: {
        'Content-Type': 'application/json, text/html',
        'Accept': 'application/json',
    },
    responseType: 'json',
    withCredentials: true
};

let URL = process.env.REACT_APP_API_URL;

// method GET
export async function httpGet(endpoint, param) {
    if (endpoint === "" || endpoint === null || endpoint === undefined)
        return new Promise({message: "parameter is required"});
    return axios.get(URL + endpoint, config)
}

// method POST
export async function httpPost(endpoint, param) {
    if (endpoint === "" || endpoint === null || endpoint === undefined)
        return new Promise({message: "parameter is required"});
    return axios.post(URL + endpoint, param, config);
}