import React from "react";
import { useForm } from "react-hook-form";
import { SignupFormData, signupSchema } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignup } from "@/src/hooks/useSignup";
import Button from "../Button";

const SignupForm = () => {
  const { handleSignup, isLoading } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit(handleSignup)}
      className="space-y-6"
      style={{ width: "387px" }}
    >
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-4  w-full">
          <label htmlFor="email">
            <i className="ri-user-3-line" />
            Nombre
          </label>
          <input
            type="name"
            id="name"
            {...register("name")}
            disabled={isLoading}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200"
            placeholder="Ingresa tu nombre"
          />
          {errors.name && (
            <p className="text-rose-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

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
      <Button
        id="login-button"
        type="submit"
        disabled={isLoading || !isValid}
        className="w-full"
      >
        {isLoading ? "Registrando..." : "Registrarse"}
      </Button>
    </form>
  );
};

export default SignupForm;
