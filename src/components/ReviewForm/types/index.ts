import { z } from "zod";

export const reviewSchema = z.object({
  book_title: z.string().min(1, "El título del libro es requerido").trim(),
  rating: z
    .number()
    .min(1, "La calificación debe ser al menos 1")
    .max(5, "La calificación no puede ser mayor a 5"),
  review: z.string().min(1, "La reseña es requerida").trim(),
  mood: z.string().min(1, "El estado de es requerido").trim(),
});

export type ReviewFormData = z.infer<typeof reviewSchema>;
