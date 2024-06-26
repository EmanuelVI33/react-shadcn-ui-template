import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json", 
  },
});
