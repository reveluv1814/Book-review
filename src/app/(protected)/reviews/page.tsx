"use client";

import Button from "@/src/components/Button";
import { useLogin } from "@/src/hooks/useLogin";
import { useReviews } from "@/src/hooks/useReviews";
import { useEffect } from "react";
import ReviewsContainer from "./ui/ReviewsContainer";

const Reviews = () => {
  const { userName, handleLogout } = useLogin();
  const { isLoadingListReviews, fetchReviews, reviews, errorListReviews } =
    useReviews();

  const fetchData = async () => {
    await fetchReviews();
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Mis Reviews</h1>
          <p className="mt-1 text-sm text-slate-600">Hola {userName}</p>
        </div>
        <Button onClick={handleLogout}>cerrar sesión</Button>
      </div>

      <ReviewsContainer
        reviews={reviews}
        isLoadingListReviews={isLoadingListReviews}
        errorListReviews={errorListReviews}
        fetchData={fetchData}
      />
    </div>
  );
};

export default Reviews;
