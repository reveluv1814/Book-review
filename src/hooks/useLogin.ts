"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "../app/services/authService";
import { LoginData } from "../types/types";
import { useAuthContext } from "./useAuthContext";

export function useLogin() {
  const router = useRouter();
  const { userName, setUserName, clearUserName } = useAuthContext();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (data: LoginData) => {
    setIsLoading(true);
    setError("");
    try {
      const resultado = await authService.login(data.email, data.password);

      setUserName(resultado.name);

      router.push("/reviews");
    } catch (e) {
      const errorMessage =
        e instanceof Error
          ? e.message
          : "Error al iniciar sesión. Verifica tus credenciales.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    setError("");
    try {
      await authService.logout();
      router.push("/login");
      clearUserName();
    } catch (e) {
      const errorMessage =
        e instanceof Error
          ? e.message
          : "Error al cerrar sesión. Inténtalo de nuevo.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleLogin,
    handleLogout,
    isLoading,
    userName,
    error,
  };
}
