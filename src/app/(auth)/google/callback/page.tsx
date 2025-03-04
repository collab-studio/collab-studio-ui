"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GoogleAuthCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("accessToken");

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      router.push("/dashboard");
    } else {
      router.push("/login?error=OAuthFailed");
    }
  }, [router]);

  return <p>Processing login...</p>;
};

export default GoogleAuthCallback;
