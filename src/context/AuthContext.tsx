"use client";

import { createContext, useMemo, useState } from "react";

type AuthContextValue = {
  userName: string;
  setUserName: (name: string) => void;
  clearUserName: () => void;
};

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserNameState] = useState<string>("");

  const value = useMemo<AuthContextValue>(
    () => ({
      userName,
      setUserName: (name: string) => setUserNameState(name),
      clearUserName: () => setUserNameState(""),
    }),
    [userName],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
