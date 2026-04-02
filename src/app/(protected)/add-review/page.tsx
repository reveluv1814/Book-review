"use client";

import Button from "@/src/components/Button";
import ReviewForm from "@/src/components/ReviewForm/ReviewForm";
import { useRouter } from "next/navigation";

const AddreviewPage = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/reviews");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl">
        <Button
          onClick={handleBack}
          className="bg-transparent border-white hover:bg-gray-50/10 mb-10"
        >
          <i className="ri-arrow-left-line" />
          Volver a reviews
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Agregar review</h1>
          <p className="mt-2 text-white font-extralight">
            Comparte tu opinión sobre este libro
          </p>
        </div>

        <ReviewForm />
      </div>
    </div>
  );
};

export default AddreviewPage;
