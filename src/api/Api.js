import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://api.openweathermap.org/",
  params: {
    appid: import.meta.env.VITE_API_KEY,
  },
});

// here use interceptors to set the token in every request if i need to do it
