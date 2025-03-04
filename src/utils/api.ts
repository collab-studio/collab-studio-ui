import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { AuthResponse } from "../types/authTypes";
import AuthUtils from "./auth";
import config from "../config/env";

interface OriginalAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

const API_BASE_URL = config.apiBaseURL;
const ACCESS_TOKEN_SERVER_ERROR = [401, 403];

const API: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

API.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem(AuthUtils.AccessToken);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

let isRefreshing = false;
let refreshPromise: Promise<AxiosResponse<AuthResponse>> | null = null;
let refreshFailed = false;

function clearRefreshState() {
  isRefreshing = false;
  refreshPromise = null;
}

API.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest: OriginalAxiosRequestConfig | undefined =
      error.config;

    if (!originalRequest) {
      console.error("No original request found");
      return Promise.reject(error);
    }

    if (refreshFailed) {
      console.warn("Refresh already failed. Blocking further API requests.");
      return Promise.reject(new Error("Blocked due to failed refresh"));
    }

    if (
      error.response?.status &&
      ACCESS_TOKEN_SERVER_ERROR.includes(error.response.status) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        try {
          if (!refreshPromise) {
            return Promise.reject(new Error("Refresh promise is null"));
          }
          const { data }: AxiosResponse<AuthResponse> = await refreshPromise;

          API.defaults.headers.common["Authorization"] =
            `Bearer ${data.accessToken}`;
          return API(originalRequest);
        } catch (refreshError) {
          return Promise.reject(
            refreshError instanceof Error
              ? refreshError
              : new Error(String(refreshError)),
          );
        }
      }

      isRefreshing = true;
      const deviceInfo = AuthUtils.getDeviceInfo();
      const requestBody = {
        ...deviceInfo,
      };
      refreshPromise = axios.post<AuthResponse>(
        `${API_BASE_URL}/auth/refresh`,
        { requestBody },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      try {
        const data = await refreshPromise;
        const accessToken = data.data.accessToken;
        if (typeof accessToken === "string") {
          localStorage.setItem(AuthUtils.AccessToken, accessToken);
          API.defaults.headers.common["Authorization"] =
            `Bearer ${accessToken}`;
          clearRefreshState();
          return API(originalRequest);
        } else {
          throw new Error("Invalid access token");
        }
      } catch (refreshError) {
        refreshFailed = true;
        clearRefreshState();
        localStorage.removeItem(AuthUtils.AccessToken);
        setTimeout(() => {
          window.location.href = "/signin";
        }, 0);
        return Promise.reject(
          refreshError instanceof Error
            ? refreshError
            : new Error(String(refreshError)),
        );
      }
    }

    return Promise.reject(error);
  },
);

export default API;
