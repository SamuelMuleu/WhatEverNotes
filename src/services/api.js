import axios from "axios";

export const api = axios.create({
    baseURL: "https://whatevernotes-backend.onrender.com"
});

