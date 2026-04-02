import { LoginResponse, SignupData, SignupResponse } from "@/src/types/types";

export const authService = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    const result = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!result.ok) {
      const error = await result.json().catch(() => ({
        message: "Error en la petición",
      }));
      throw new Error(error.message || `HTTP Error: ${result.status}`);
    }

    return result.json();
  },

  logout: async (): Promise<void> => {
    const result = await fetch("/api/logout", {
      method: "POST",
      credentials: "include",
    });

    if (!result.ok) {
      const error = await result.json().catch(() => ({
        message: "Error en la petición",
      }));
      throw new Error(error.message || `HTTP Error: ${result.status}`);
    }
  },

  register: async (datos: SignupData): Promise<SignupResponse> => {
    const result = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    if (!result.ok) {
      const error = await result.json().catch(() => ({
        message: "Error en la petición",
      }));
      throw new Error(error.message || `HTTP Error: ${result.status}`);
    }

    return result.json();
  },
};
