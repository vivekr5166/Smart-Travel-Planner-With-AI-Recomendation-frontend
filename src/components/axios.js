import axios from "axios";

const instance = axios.create({
 // baseURL: "https://smart-travel-planner-with-ai.onrender.com",
  baseURL: "http://localhost:3000",
  withCredentials: true  
  
});

export default instance;
