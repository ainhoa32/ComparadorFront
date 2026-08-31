import axios from "axios";

const http = axios.create({
  baseURL: "/data",
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;
