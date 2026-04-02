"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "../app/services/authService";
import { LoginData } from "../types/types";

export function useLogin() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (data: LoginData) => {
    setIsLoading(true);
    setError("");
    try {
      await authService.login(data.email, data.password);
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

  return {
    handleLogin,
    isLoading,
    error,
  };
}
