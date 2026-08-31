import axios from "axios";

const http = axios.create({
  baseURL: "/data/data.json",
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;
