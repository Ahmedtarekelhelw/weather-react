import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://api.openweathermap.org/",
  params: {
    appid: "9f7f43553c3b47d0fa6636d1edfd1f8a",
  },
});

// here use interceptors to set the token in every request if i need to do it
