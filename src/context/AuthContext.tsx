import { createContext, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { v4 as uuid4 } from "uuid";
import { jwtDecode } from "jwt-decode";

import API from "../utils/api";
import {
  AuthContextType,
  AuthResponse,
  DecodedToken,
} from "../types/authTypes";
import AuthUtils from "../utils/auth";
import { User } from "../utils/user-api";

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<DecodedToken | null>(null);
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        if (!decoded._id) {
          // if jwt is tampered with and id key is missing add id to validate in server
          decoded._id = uuid4();
        }
        setUser(decoded);
      } catch (error) {
        console.error("Invalid token", error);
      }
    } else {
      setLoading(false);
    }
  }, []);

  const register = async (
    username: string,
    email: string,
    password: string,
  ) => {
    const deviceInfo = AuthUtils.getDeviceInfo();
    const requestBody = {
      username,
      email,
      password,
      ...deviceInfo,
    };
    try {
      const { data }: AxiosResponse<AuthResponse> = await API.post(
        "/auth/v1/register",
        requestBody,
      );

      const token = data.accessToken;
      localStorage.setItem(AuthUtils.AccessToken, token);
      const decoded = jwtDecode<DecodedToken>(token);
      setUser(decoded);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("error on registering user", error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const deviceInfo = AuthUtils.getDeviceInfo();
      const requestBody = {
        email,
        password,
        ...deviceInfo,
      };
      const { data }: AxiosResponse<AuthResponse> = await API.post(
        "/auth/v1/login",
        requestBody,
      );

      const token = data.accessToken;
      localStorage.setItem(AuthUtils.AccessToken, token);
      const decoded = jwtDecode<DecodedToken>(token);
      setUser(decoded);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    await API.post("/logout");
    localStorage.removeItem("accessToken");
    setUser(null);
    window.location.href = "/login";
  };

  const googleLogin = () => {
    const deviceInfo = AuthUtils.getDeviceInfo();
    const state = encodeURIComponent(JSON.stringify(deviceInfo));
    window.open(`${API.defaults.baseURL}/auth/google?state=${state}`, "_self");
  };

  const handleAuthUser = (user: User | null) => {
    setLoading(false);
    setAuthUser(user);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        googleLogin,
        handleAuthUser,
        authUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const AuthContextExport = { AuthContext, AuthProvider };
export default AuthContextExport;
