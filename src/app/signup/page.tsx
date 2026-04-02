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
    <div>
      Registrarse
      <Button className="bg-transparent border-sky-500!" onClick={handleBack}>
        <i className="ri-arrow-left-line mr-1"></i> Atrás
      </Button>
      <div>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
