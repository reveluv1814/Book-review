"use client";
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
    <form onSubmit={handleSubmit(handleSignup)} className="space-y-5">
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            <i className="ri-user-3-line mr-2" />
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            disabled={isLoading}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-[#667EEA]/20 disabled:bg-gray-100 disabled:text-gray-500"
            placeholder="Juan Pérez"
          />
          {errors.name && (
            <p className="text-xs text-rose-600">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            <i className="ri-mail-line mr-2" />
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            disabled={isLoading}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-[#667EEA]/20 disabled:bg-gray-100 disabled:text-gray-500"
            placeholder="correo@email.com"
          />
          {errors.email && (
            <p className="text-xs text-rose-600">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            <i className="ri-lock-line mr-2" />
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            disabled={isLoading}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-[#667EEA]/20 disabled:bg-gray-100 disabled:text-gray-500"
            placeholder="******"
          />
          {errors.password && (
            <p className="text-xs text-rose-600">{errors.password.message}</p>
          )}
        </div>
      </div>

      <Button
        id="signup-button"
        type="submit"
        disabled={isLoading || !isValid}
        className="w-full"
      >
        {isLoading ? (
          <>
            <i className="ri-loader-4-line mr-2 inline-block animate-spin" />
            Creando cuenta...
          </>
        ) : (
          "Crear cuenta"
        )}
      </Button>
    </form>
  );
};

export default SignupForm;
