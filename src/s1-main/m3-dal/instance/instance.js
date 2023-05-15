import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
    // baseURL: 'https://movies-service-cloud.onrender.com',
})