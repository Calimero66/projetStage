import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    withXSRFToken: true,
});


// "http://localhost:8000"
//  import.meta.env.VITE_API_UR
