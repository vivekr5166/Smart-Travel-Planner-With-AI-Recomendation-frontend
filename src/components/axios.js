import axios from "axios";

const instance = axios.create({
  baseURL: "https://smart-travel-planner-with-ai.onrender.com",
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

export default instance;
