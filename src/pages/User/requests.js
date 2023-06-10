// import api from '../../http-common.js'

import {api} from "../../http-common";

export const getUserList = () => api.get("/users");

export const getUser = () => {
    return api.get("/user");
}

export const logIn = (data) => {
    return api.post("/login", data);
}

export const signUp = (data) => {
    return api.post("/user", data);
}


