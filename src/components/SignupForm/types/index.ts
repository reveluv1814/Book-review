import { z } from "zod";

export const signupSchema = z.object({
  email: z.email("Email inválido").trim(),
  password: z
    .string()
    .trim()
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
  name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres"),
});

export type SignupFormData = z.infer<typeof signupSchema>;

export interface SignupFormProps {
  onSubmit: (data: SignupFormData) => Promise<void>;
  isLoading?: boolean;
  error?: string;
}
