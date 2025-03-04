"use client";

import AuthUtil from "@/src/context/AuthContext";

const { AuthProvider } = AuthUtil;

export default function withAuthProvider(Component: React.ComponentType) {
  return function AuthWrappedComponent(
    props: React.ComponentProps<typeof Component>,
  ) {
    return (
      <AuthProvider>
        <Component {...props} />
      </AuthProvider>
    );
  };
}
