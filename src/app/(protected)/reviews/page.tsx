"use client";

import Button from "@/src/components/Button";
import WelcomeBanner from "@/src/components/WelcomeBanner";
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
      <div className="mb-8 flex items-center justify-end">
        <Button
          onClick={handleLogout}
          className="bg-third border border-white hover:bg-violet-500/50 text-white"
        >
          <i className="ri-logout-box-r-line mr-2" />
          Cerrar sesión
        </Button>
      </div>

      <div className="mb-12">
        <WelcomeBanner userName={userName} />
      </div>

      <hr className="h-px my-8 bg-neutral-50/40 border-0" />

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
