export interface JWTPayload {
  userId: number;
  email: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface Review {
  id: number;
  user_id: number;
  book_title: string;
  rating: number;
  review: string;
  mood: string;
  created_at: Date | string;
}

export interface CreateReviewData {
  book_title: string;
  rating: number;
  review: string;
  mood: string;
}

