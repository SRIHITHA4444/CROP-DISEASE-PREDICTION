import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your backend URL
});

export default instance;
