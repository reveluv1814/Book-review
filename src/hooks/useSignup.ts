import { useState } from "react";
import { SignupData } from "../types/types";
import { authService } from "../app/services/authService";

export function useSignup() {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (data: SignupData) => {
    setIsLoading(true);
    setError("");
    try {
      await authService.register(data);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Error al registrarse. Verifica tus datos e intenta nuevamente.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSignup,
    isLoading,
    error,
  };
}
