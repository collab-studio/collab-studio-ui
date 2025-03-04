"use client";

import withAuthProvider from "@/src/utils/withAuthProvier";
import ProtectedRoute from "../ProtectedRoute";
import { useAuthUser } from "@/src/hooks/useAuthUser";

function Dashboard() {
  const { authUser } = useAuthUser();

  return (
    <ProtectedRoute>
      <main>
        <p>{authUser?.email ? <p>{authUser.email}</p> : null}</p>
        <p>{authUser?.username ? <p>{authUser.username}</p> : null}</p>
      </main>
    </ProtectedRoute>
  );
}

export default withAuthProvider(Dashboard);
