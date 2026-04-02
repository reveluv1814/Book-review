"use client";
import Button from "@/src/components/Button";
import SignupForm from "@/src/components/SignupForm/SignupForm";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <Button
          onClick={handleBack}
          className="bg-transparent border-white hover:bg-gray-50/10 mb-10"
        >
          <i className="ri-arrow-left-line" />
          Atrás
        </Button>

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Registrarse</h1>
          <p className="mt-2 text-sm text-white/80">
            Crea tu cuenta y comparte tus reseñas.
          </p>
        </div>

        <div className="rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl">
          <div className="p-8">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              Crear cuenta
            </h2>

            <SignupForm />
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-white/70">
          © 2026 BookReview La Paz - Bolivia
        </p>
      </div>
    </div>
  );
};

export default Signup;
