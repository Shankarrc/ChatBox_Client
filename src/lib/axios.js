import axios from "axios";

const { VITE_SERVER_URL } = import.meta.env;

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_MODE === "development" ? "http://localhost:3000/api" : VITE_SERVER_URL + "/api",
  withCredentials: true,
});
