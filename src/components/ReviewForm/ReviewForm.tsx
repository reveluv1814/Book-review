import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Button";
import { ReviewFormData, reviewSchema } from "./types";
import { useReviews } from "@/src/hooks/useReviews";

const RATE = [1, 2, 3, 4, 5];

const ReviewForm = () => {
  const { createReview, isLoadingCreateReview } = useReviews();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit(createReview)}
      className="mx-auto flex w-full max-w-xl flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <label htmlFor="book_title">
            <i className="ri-book-2-line mr-2" />
            Título del libro
          </label>
          <input
            type="text"
            id="book_title"
            {...register("book_title")}
            disabled={isLoadingCreateReview}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200"
            placeholder="Ingresa el título del libro"
          />
          {errors.book_title && (
            <p className="text-rose-500 text-sm mt-1">
              {errors.book_title.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="rating">
            <i className="ri-star-line mr-2" />
            Calificación
          </label>

          <div className="grid grid-cols-5 gap-2">
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <>
                  {RATE.map((rating) => {
                    const isSelected = field.value === rating;

                    return (
                      <button
                        id={`rating-${rating}`}
                        key={rating}
                        type="button"
                        onClick={() => field.onChange(rating)}
                        disabled={isLoadingCreateReview}
                        className={`flex flex-col items-center justify-center rounded-2xl border px-3 py-3 text-center transition ${
                          isSelected
                            ? "border-sky-500 bg-sky-50 text-sky-700 ring-2 ring-sky-200"
                            : "border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:bg-sky-50"
                        }`}
                      >
                        <i
                          className={`text-lg ${
                            isSelected
                              ? "ri-star-fill text-amber-500"
                              : "ri-star-line"
                          }`}
                        />
                        <span className="mt-1 text-sm font-semibold">
                          {rating}
                        </span>
                      </button>
                    );
                  })}
                </>
              )}
            />
          </div>

          {errors.rating && (
            <p className="text-rose-500 text-sm mt-1">
              {errors.rating.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="review">
            <i className="ri-chat-3-line mr-2" />
            Reseña
          </label>
          <input
            type="text"
            id="review"
            {...register("review")}
            disabled={isLoadingCreateReview}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200"
            placeholder="Ingresa tu reseña"
          />
          {errors.review && (
            <p className="text-rose-500 text-sm mt-1">
              {errors.review.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="mood">
            <i className="ri-emotion-happy-line mr-2" />
            Mood
          </label>
          <input
            type="text"
            id="mood"
            {...register("mood")}
            disabled={isLoadingCreateReview}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200"
            placeholder="Ingresa tu mood"
          />
          {errors.mood && (
            <p className="text-rose-500 text-sm mt-1">{errors.mood.message}</p>
          )}
        </div>
      </div>
      <Button
        type="submit"
        disabled={isLoadingCreateReview || !isValid}
        className="w-full"
      >
        {isLoadingCreateReview ? "Registrando..." : "Guardar review"}
      </Button>
    </form>
  );
};

export default ReviewForm;
