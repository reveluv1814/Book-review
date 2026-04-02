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
    reset,
    formState: { errors, isValid },
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ReviewFormData) => {
    await createReview(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full rounded-2xl bg-background-secondary p-8 shadow-lg space-y-6"
    >
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="book_title"
            className="text-sm font-medium text-custom"
          >
            <i className="ri-book-2-line mr-2" />
            Título del libro
          </label>
          <input
            type="text"
            id="book_title"
            {...register("book_title")}
            disabled={isLoadingCreateReview}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-custom transition placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-[#667EEA]/20 disabled:bg-gray-100 disabled:text-gray-500"
            placeholder="Ej: Cien años de soledad"
          />
          {errors.book_title && (
            <p className="text-xs text-rose-600">{errors.book_title.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="rating" className="text-sm font-medium text-custom">
            <i className="ri-star-line mr-2" />
            Calificación
          </label>

          <div className="grid grid-cols-5 gap-3">
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
                        className={`flex flex-col items-center justify-center rounded-xl border-2 px-2 py-4 text-center transition-all cursor-pointer ${
                          isSelected
                            ? "border-third bg-violet-500/10 text-third ring-1 ring-third/20"
                            : "border-gray-300 bg-white text-gray-600 hover:border-third hover:bg-third/5"
                        }`}
                      >
                        <i
                          className={`text-xl ${
                            isSelected
                              ? "ri-star-fill text-amber-500"
                              : "ri-star-line"
                          }`}
                        />
                        <span className="mt-1 text-xs font-semibold">
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
            <p className="text-xs text-rose-600">{errors.rating.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="review" className="text-sm font-medium text-custom">
            <i className="ri-chat-3-line mr-2" />
            Reseña
          </label>
          <textarea
            id="review"
            {...register("review")}
            disabled={isLoadingCreateReview}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-custom transition placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-[#667EEA]/20 disabled:bg-gray-100 disabled:text-gray-500 resize-none min-h-24"
            placeholder="Comparte tu opinión sobre el libro..."
          />
          {errors.review && (
            <p className="text-xs text-rose-600">{errors.review.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="mood" className="text-sm font-medium text-custom">
            <i className="ri-emotion-happy-line mr-2" />
            Mood
          </label>
          <input
            type="text"
            id="mood"
            {...register("mood")}
            disabled={isLoadingCreateReview}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-custom transition placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-[#667EEA]/20 disabled:bg-gray-100 disabled:text-gray-500"
            placeholder="Ej: Reflexivo, Emocionante, Inspirador"
          />
          {errors.mood && (
            <p className="text-xs text-rose-600">{errors.mood.message}</p>
          )}
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          id="add-review-button"
          type="submit"
          disabled={isLoadingCreateReview || !isValid}
          className="flex-1"
        >
          {isLoadingCreateReview ? (
            <>
              <i className="ri-loader-4-line mr-2 inline-block animate-spin" />
              Registrando...
            </>
          ) : (
            "Registrar review"
          )}
        </Button>
      </div>
    </form>
  );
};

export default ReviewForm;
