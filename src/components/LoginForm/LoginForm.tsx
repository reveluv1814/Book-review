"use client";
import { useLogin } from "@/src/hooks/useLogin";
import { LoginFormData, loginSchema } from "./types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Button";
import Link from "next/link";

const LoginForm = () => {
  const { handleLogin, isLoading } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="space-y-6"
      style={{ width: "387px" }}
    >
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-4  w-full">
          <label htmlFor="email">
            <i className="ri-mail-line" />
            Correo
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            disabled={isLoading}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200"
            placeholder="Ingresa tu correo"
          />
          {errors.email && (
            <p className="text-rose-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-4 w-full">
          <label htmlFor="password">
            <i className="ri-lock-line" />
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            disabled={isLoading}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200"
            placeholder="Ingresa tu contraseña"
          />
          {errors.password && (
            <p className="text-rose-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-2 text-right">
        <p className="text-caption-1 text-vita-gray-1">
          ¿No tienes cuenta?{" "}
          <Link href="/signup" className="text-white hover:underline">
            Regístrate
          </Link>
        </p>
      </div>

      <Button
        id="login-button"
        type="submit"
        disabled={isLoading || !isValid}
        className="w-full"
      >
        {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
      </Button>
    </form>
  );
};

export default LoginForm;
