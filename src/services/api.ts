import axios from 'axios';

export const api = axios.create({
    baseURL: "http://10.150.7.7:3333",
    timeout: 700
})