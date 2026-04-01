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