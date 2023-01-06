import axios from "axios";

export const petList = axios.create({
    baseURL: "http://backend:3000/user/1/pets",
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
    },
  });