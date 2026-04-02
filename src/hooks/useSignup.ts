import { useState } from "react";
import { SignupData } from "../types/types";
import { authService } from "../app/services/authService";
import { toast } from "react-toastify";

export function useSignup() {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (data: SignupData) => {
    setIsLoading(true);
    setError("");
    try {
      await authService.register(data);

      toast.success("Registro exitoso! Ahora puedes iniciar sesión", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Error al registrarse. Verifica tus datos e intenta nuevamente.";
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
    handleSignup,
    isLoading,
    error,
  };
}
