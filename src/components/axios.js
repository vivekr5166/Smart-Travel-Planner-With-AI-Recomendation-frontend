import axios from "axios";

const instance = axios.create({
  baseURL: "https://smart-travel-planner-with-ai.onrender.com",
  withCredentials: true  
  // baseURL: "http://localhost:3000",
});

export default instance;
