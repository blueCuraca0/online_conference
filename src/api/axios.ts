import axios from "axios";
import { apiBaseUrl } from "utils";
import { useNavigate } from "react-router-dom";

const api = axios.create({
  baseURL: `${apiBaseUrl}/api/`,
  headers: {
    "Content-type": "application/json",
  },
  maxBodyLength: Infinity,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 || error.response.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refresh_token");
        const response = await axios.post(
          `${apiBaseUrl}/api/auth/refresh_token/`,
          {
            refresh: refreshToken,
          }
        );
        const token = response.data.access;
        localStorage.setItem("access_token", token);
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axios(originalRequest);
      } catch (error) {
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("access_token");
        const navigate = useNavigate();
        navigate("/login");
      }
    }

    return Promise.reject(error);
  }
);
