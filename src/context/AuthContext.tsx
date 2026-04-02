"use client";

import { createContext, useMemo, useState } from "react";
import { UserResponse } from "../types/types";

type AuthContextValue = {
  user: UserResponse | null;
  setUser: (user: UserResponse | null) => void;
  clearUser: () => void;
};

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserResponse | null>(null);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      setUser: (user: UserResponse | null) => setUser(user),
      clearUser: () => setUser(null),
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
