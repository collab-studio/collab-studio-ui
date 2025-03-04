import { User } from "../utils/user-api";

interface AuthContextType {
  user: DecodedToken | null;
  login: (username: string, password: string) => Promise<void>;
  register: (
    username: string,
    email: string,
    password: string,
  ) => Promise<void>;
  logout: () => Promise<void>;
  handleAuthUser: (user: User | null) => void;
  authUser: User | null;
  loading: boolean;
  googleLogin: () => void;
}

interface AuthResponse extends Response {
  accessToken: string;
}

interface DecodedToken {
  _id: string;
  email: string;
  exp: number;
  iat: number;
}

export type { AuthContextType, AuthResponse, DecodedToken };
