"use client";
import { useState } from "react";
import { CreateReviewData, ReviewData } from "../types/types";
import { reviewsService } from "../app/services/reviews";

export function useReviews() {
  const [errorListReviews, setErrorListReviews] = useState<string>("");
  const [isLoadingListReviews, setIsLoadingListReviews] =
    useState<boolean>(false);
  const [reviews, setReviews] = useState<ReviewData[] | null>(null);

  const [errorCreateReview, setErrorCreateReview] = useState<string>("");
  const [isLoadingCreateReview, setIsLoadingCreateReview] =
    useState<boolean>(false);

  const [errorDeleteReview, setErrorDeleteReview] = useState<string>("");
  const [isLoadingDeleteReview, setIsLoadingDeleteReview] =
    useState<boolean>(false);

  const fetchReviews = async () => {
    setIsLoadingListReviews(true);
    setErrorListReviews("");
    try {
      const resultado = await reviewsService.list();

      setReviews(resultado.reviews);
    } catch (e) {
      const errorMessage =
        e instanceof Error
          ? e.message
          : "Error al obtener los reviews. Inténtalo de nuevo.";
      setErrorListReviews(errorMessage);
    } finally {
      setIsLoadingListReviews(false);
    }
  };

  const createReview = async (data: CreateReviewData) => {
    setIsLoadingCreateReview(true);
    setErrorCreateReview("");
    try {
      await reviewsService.register(data);
    } catch (e) {
      const errorMessage =
        e instanceof Error
          ? e.message
          : "Error al crear el review. Inténtalo de nuevo.";
      setErrorCreateReview(errorMessage);
    } finally {
      setIsLoadingCreateReview(false);
    }
  };

  const deleteReview = async (id: number) => {
    setIsLoadingDeleteReview(true);
    setErrorDeleteReview("");
    try {
      await reviewsService.delete(id);
    } catch (e) {
      const errorMessage =
        e instanceof Error
          ? e.message
          : "Error al eliminar el review. Inténtalo de nuevo.";
      setErrorDeleteReview(errorMessage);
    } finally {
      setIsLoadingDeleteReview(false);
    }
  };

  return {
    reviews,
    isLoadingListReviews,
    errorListReviews,
    isLoadingCreateReview,
    errorCreateReview,
    isLoadingDeleteReview,
    errorDeleteReview,
    fetchReviews,
    createReview,
    deleteReview,
  };
}
