import {api} from "../../http-common";

export const getList = () => api.get("/location/list");

export const getLocation = (id) => {
    return api.get(`/location/${id}`);
}

export const getContractList = () => {
    return api.get('/contracts')
}

export const getCameraSelectList = () => {
    return api.get('/camera-select')
}

export const createLocation = (data) => {
    return api.post("/location/list", data);
}

export const updateLocation = (id, data) => {
    return api.put(`/location/${id}`, data);
}

export const deleteLocation = (id) => {
    return api.delete(`/location/${id}`);
}

export const findByTitle = (title) => {
    return api.get(`/tutorials?title=${title}`);
}
