import { db } from "@/lib/db";
import { CreateReviewData, Review } from "@/types";

export class ReviewsRepository {
  constructor(private database = db) {}

  async getReviews(): Promise<Review[]> {
    const result = await this.database.query(`
      SELECT 
        reviews.id,
        reviews.book_title,
        reviews.rating,
        reviews.review,
        reviews.mood,
        reviews.created_at,
        users.name AS reviewer
      FROM reviews
      JOIN users ON users.id = reviews.user_id
      ORDER BY reviews.created_at DESC
    `);
    return result.rows;
  }

  async createReview(data: CreateReviewData & { user_id: number }) {
    const result = await this.database.query(
      "INSERT INTO reviews (book_title, rating, review, mood, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [data.book_title, data.rating, data.review, data.mood, data.user_id],
    );
    return result.rows[0];
  }

  async deleteReview(reviewId: number, userId: number): Promise<Review | null> {
    const result = await this.database.query(
      "DELETE FROM reviews WHERE id = $1 AND user_id = $2 RETURNING *",
      [reviewId, userId],
    );
    return result.rows[0] || null;
  }
}
