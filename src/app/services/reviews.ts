import {
  CreateReviewData,
  CreateReviewResponse,
  DeleteReviewResponse,
  ReviewResponse,
} from "@/src/types/types";

export const reviewsService = {
  list: async (): Promise<ReviewResponse> => {
    const result = await fetch("/api/reviews", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!result.ok) {
      const error = await result.json().catch(() => ({
        message: "Error en la petición",
      }));
      throw new Error(error.message || `HTTP Error: ${result.status}`);
    }

    return result.json();
  },

  register: async (datos: CreateReviewData): Promise<CreateReviewResponse> => {
    const result = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    if (!result.ok) {
      const error = await result.json().catch(() => ({
        message: "Error en la petición",
      }));
      throw new Error(error.message || `HTTP Error: ${result.status}`);
    }

    return result.json();
  },

  delete: async (id: number): Promise<DeleteReviewResponse> => {
    const result = await fetch(`/api/reviews/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!result.ok) {
      const error = await result.json().catch(() => ({
        message: "Error en la petición",
      }));
      throw new Error(error.message || `HTTP Error: ${result.status}`);
    }

    return result.json();
  },
};
