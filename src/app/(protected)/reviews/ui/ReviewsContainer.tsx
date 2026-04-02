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
    <div className="space-y-6">
      {isLoadingListReviews ? (
        <div className="rounded-2xl bg-background-secondary p-8 text-center">
          <p className="text-custom text-2xl">Cargando reviews...</p>
        </div>
      ) : errorListReviews ? (
        <div className="rounded-xl border-l-4 border-l-third bg-background-secondary p-6">
          <p className="text-custom text-2xl">{errorListReviews}</p>
        </div>
      ) : reviews && reviews.length === 0 ? (
        <div className="rounded-xl bg-background-secondary p-12 text-center">
          <p className="text-text mb-6">Todavia no hay reviews para mostrar.</p>
          <Button onClick={handleAddReview}>Crear tu primera review</Button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-semibold text-white">Reviews</h2>
            <Button
              onClick={handleAddReview}
              className="flex items-center justify-center gap-2 hover:bg-[#667EEA]/80 "
            >
              <i className="ri-add-circle-line text-lg"></i> Agregar Review
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
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
