import axios, { AxiosInstance } from "axios";
import { Config } from "./config/config";

export const getAxiosInstance = (config: Config): AxiosInstance => {
  return axios.create({
    baseURL: "https://dummyjson.com/",
    headers: {
      "Content-Type": "application/json",
    },
    // Uncomment the line below if you want to disable SSL certificate validation
    //headers: { NODE_TLS_REJECT_UNAUTHORIZED: "0" },
  });
};
