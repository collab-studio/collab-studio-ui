import { useContext, useEffect, useState, useRef } from "react";
import { fetchUserById } from "@/src/utils/user-api";
import AuthUtil from "../context/AuthContext";
import { AuthContextType } from "../types/authTypes";

const { AuthContext } = AuthUtil;

export const useAuthUser = () => {
  const { user, authUser, handleAuthUser } = useContext(
    AuthContext,
  ) as AuthContextType;
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false);

  useEffect(() => {
    const getUser = async (id: string) => {
      setLoading(true);
      try {
        const userData = await fetchUserById(id);
        if (userData) {
          handleAuthUser(userData);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        handleAuthUser(null);
      }

      setLoading(false);
    };

    if (user?._id && !authUser && !hasFetched.current) {
      hasFetched.current = true;
      getUser(user._id)
        .then((user) => console.log(user))
        .catch((error) => console.error("Error fetching user:", error));
    }
  }, [user, authUser, handleAuthUser]);

  return { authUser, loading };
};
