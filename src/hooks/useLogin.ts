"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "../app/services/authService";
import { LoginData } from "../types/types";
import { useAuthContext } from "./useAuthContext";
import { toast } from "react-toastify";

export function useLogin() {
  const router = useRouter();
  const { user, setUser, clearUser } = useAuthContext();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (data: LoginData) => {
    setIsLoading(true);
    setError("");
    try {
      const resultado = await authService.login(data.email, data.password);

      setUser(resultado.user);

      router.push("/reviews");
    } catch (e) {
      const errorMessage =
        e instanceof Error
          ? e.message
          : "Error al iniciar sesión. Verifica tus credenciales";
      setError(errorMessage);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
      });
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
      clearUser();
    } catch (e) {
      const errorMessage =
        e instanceof Error
          ? e.message
          : "Error al cerrar sesión. Inténtalo de nuevo.";
      setError(errorMessage);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleLogin,
    handleLogout,
    isLoading,
    userName: user?.name || null,
    error,
  };
}
