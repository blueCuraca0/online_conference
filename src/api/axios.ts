import axios from "axios";
import { apiBaseUrl } from "utils";
import { useNavigate } from "react-router-dom";
import { supabase } from "lib/supabase";

const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-type": "application/json",
  },
  maxBodyLength: Infinity,
  withCredentials: true,
});

api.interceptors.request.use(
  async (config) => {
    // const token = localStorage.getItem("access_token");

    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      config.headers["x-user-id"] = user.id;
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

      const navigate = useNavigate();
      navigate("/login");
    }

    return Promise.reject(error);
  }
);
