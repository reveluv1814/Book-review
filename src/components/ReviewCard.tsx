import { ReviewData } from "@/src/types/types";
import { useAuthContext } from "../hooks/useAuthContext";
interface ReviewCardProps {
  review: ReviewData;
  onDelete: (reviewId: number) => void;
}

const MAX_RATING = 5;

export default function ReviewCard({ review, onDelete }: ReviewCardProps) {
  const { user } = useAuthContext();

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <header className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-custom">
            {review.book_title}
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            <i className="ri-user-3-line mr-1" />
            {review.reviewer}
          </p>
        </div>

        {user?.id === review.user_id && (
          <div className=" inline-flex items-start ">
            <div
              id={`delete-review-${review.id}`}
              className="cursor-pointer rounded-full p-1 px-2 bg-rose-200 text-rose-400 transition hover:bg-rose-300 hover:text-rose-500"
              onClick={() => onDelete(review.id)}
            >
              <i className="ri-delete-bin-7-fill" />
            </div>
          </div>
        )}
      </header>

      <div className="mb-4 flex items-center justify-between  text-amber-500">
        <div className="flex items-center gap-2">
          <div>
            {Array.from({ length: MAX_RATING }).map((_, index) => (
              <i
                key={`${review.id}-${index}`}
                className={
                  index < review.rating
                    ? "ri-star-fill"
                    : "ri-star-line text-slate-300"
                }
              />
            ))}
          </div>
          <span className="ml-2 text-sm font-medium text-slate-600">
            {review.rating}/{MAX_RATING}
          </span>
        </div>
        <div>
          <span className="items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-sm font-medium text-emerald-700">
            <i className="ri-emotion-line" />
            {review.mood}
          </span>
        </div>
      </div>

      <div>
        <p className="line-clamp-5 text-sm leading-6 text-slate-700">
          {review.review}
        </p>
      </div>
    </article>
  );
}
