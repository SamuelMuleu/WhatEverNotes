import axios from "axios";

export const api = axios.create({
    baseURL: "https://whatevernotes-api.onrender.com"
});

