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

// frontend

export interface AuthContextType {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  setAuth: (token: string, user: User) => void;
  logout: () => void;
}

export interface UserResponse {
  id: number;
  name: string;
}
export interface LoginResponse {
  success: string;
  user: UserResponse;
}

export interface SignupResponse {
  success: string;
  id: number;
}

export interface ReviewData {
  id: number;
  user_id: number;
  book_title: string;
  rating: number;
  review: string;
  mood: string;
  created_at: Date | string;
  reviewer: string;
}

export interface ReviewResponse {
  success: string;
  reviews: ReviewData[];
}
