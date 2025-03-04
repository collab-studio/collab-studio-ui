"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthUtil from "@/src/context/AuthContext";
import { AuthContextType } from "../types/authTypes";

const { AuthContext } = AuthUtil;

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { authUser, loading } = useContext(AuthContext) as AuthContextType;

  useEffect(() => {
    if (!loading && !authUser) void router.push("/signin");
  }, [authUser, router, loading]);

  if (loading) return null;

  return authUser ? <>{children}</> : null;
};

export default ProtectedRoute;
