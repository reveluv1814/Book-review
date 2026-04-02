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
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Agregar review</h1>
          <p className="mt-1 text-sm text-slate-600">
            Completa los datos del libro
          </p>
        </div>
        <Button className="bg-transparent border-sky-500!" onClick={handleBack}>
          <i className="ri-arrow-left-line mr-1"></i> Atrás
        </Button>
      </div>

      <ReviewForm />
    </div>
  );
};

export default AddreviewPage;
