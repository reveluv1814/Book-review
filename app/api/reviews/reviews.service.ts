import { verifyUser } from "@/lib/authCookie";
import { ReviewsRepository } from "./reviews.repository";
import { CreateReviewData, Review } from "@/types";
import { SignupRepository } from "../signup/signup.repository";

export class ReviewsService {
  constructor(
    private repository = new ReviewsRepository(),
    private signupRepository = new SignupRepository(),
  ) {}

  async getReviews(): Promise<Review[]> {
    try {
      await verifyUser();

      const reviews = await this.repository.getReviews();

      return reviews;
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : "Error occurred while fetching reviews",
      );
    }
  }

  async createReview(data: CreateReviewData) {
    try {
      const user = await verifyUser();

      const { book_title, rating, review, mood } = data;

      if (!book_title || !rating || !review || !mood)
        throw new Error("All fields are required");

      if (rating < 1 || rating > 5)
        throw new Error("Rating must be between 1 and 5");

      const existingUser = await this.signupRepository.findUserById(
        user.userId,
      );
      if (!existingUser) {
        throw new Error("User not found");
      }

      const reviewCreated = await this.repository.createReview({
        book_title,
        rating,
        review,
        mood,
        user_id: user.userId,
      });

      return reviewCreated;
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : "Error occurred while creating review",
      );
    }
  }

  async deleteReview(reviewId: number) {
    try {
      const user = await verifyUser();

      const reviewDeleted = await this.repository.deleteReview(
        reviewId,
        user.userId,
      );

      if (!reviewDeleted) {
        throw new Error("Review not found");
      }

      return reviewDeleted;
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : "Error occurred while deleting review",
      );
    }
  }
}
