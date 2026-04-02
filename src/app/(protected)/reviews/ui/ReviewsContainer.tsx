import Button from "@/src/components/Button";
import Modal from "@/src/components/Modal";
import ReviewCard from "@/src/components/ReviewCard";
import { useReviews } from "@/src/hooks/useReviews";
import { ReviewData } from "@/src/types/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ReviewContainerProps {
  reviews: ReviewData[] | null;
  isLoadingListReviews: boolean;
  errorListReviews: string | null;
  fetchData: () => Promise<void>;
}

const ReviewsContainer = ({
  reviews,
  isLoadingListReviews,
  errorListReviews,
  fetchData,
}: ReviewContainerProps) => {
  const router = useRouter();

  const { deleteReview } = useReviews();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);

  const handleAddReview = () => {
    router.push("/add-review");
  };

  const handleDeleteReview = (id: number) => {
    if (id === null) return;

    setOpenModal(true);
    setSelectedReviewId(id);
  };

  const onDeleteConfirm = async () => {
    if (selectedReviewId === null) return;

    await deleteReview(selectedReviewId);
    setOpenModal(false);
    await fetchData();
    setSelectedReviewId(null);
  };

  return (
    <div>
      {isLoadingListReviews ? (
        <p className="text-slate-600">Cargando reviews...</p>
      ) : errorListReviews ? (
        <p className="rounded-lg border border-rose-200 bg-rose-50 p-3 text-rose-700">
          {errorListReviews}
        </p>
      ) : reviews && reviews.length === 0 ? (
        <p className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-600">
          Todavia no hay reviews para mostrar.
        </p>
      ) : (
        <div>
          <Button onClick={handleAddReview}>Agregar Review</Button>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {reviews?.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
                onDelete={handleDeleteReview}
              />
            ))}
          </div>
        </div>
      )}
      <Modal
        openModal={openModal}
        icono={<i className="ri-delete-bin-7-fill text-4xl text-rose-500" />}
        onClose={() => setOpenModal(false)}
        onConfirm={onDeleteConfirm}
      >
        <h2>Esta seguro de eliminar esta review?</h2>
      </Modal>
    </div>
  );
};

export default ReviewsContainer;
