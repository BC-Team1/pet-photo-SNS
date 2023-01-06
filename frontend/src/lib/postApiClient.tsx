import axios from "axios";

export const postList = axios.create({
  baseURL: "http://backend:3000/user/1/posts",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});


export const createPost = axios.create({
  baseURL: "http://localhost:3000/posts",
  responseType: "json",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const post = axios.create({
  baseURL: "http://backend:3000/posts",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});