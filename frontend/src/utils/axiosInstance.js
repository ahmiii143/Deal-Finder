import axios from "axios";

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your backend's base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include auth tokens if needed
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Assuming token is stored in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Log out if 401 Unauthorized or handle errors globally
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/login"; // Redirect to login if unauthorized
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
