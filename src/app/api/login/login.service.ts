import { LoginData, User } from "@/src/types/types";
import { SignupRepository } from "../signup/signup.repository";
import bcrypt from "bcryptjs";
import { signToken } from "@/src/lib/auth";

export class LoginService {
  constructor(private signupRepository = new SignupRepository()) {}

  async login(data: LoginData): Promise<{ token: string } & User> {
    try {
      const { email, password } = data;

      if (!email || !password) {
        throw new Error("All fields are required");
      }

      if (password.length < 6)
        throw new Error("Password must be at least 6 characters long");

      const existingUser = await this.signupRepository.findUserByEmail(email);
      if (!existingUser) {
        throw new Error("Email already registered");
      }

      const isValid = await bcrypt.compare(password, existingUser.password);

      if (!isValid) {
        throw new Error("Invalid email or password");
      }

      const token = signToken({
        userId: existingUser.id,
        email: existingUser.email,
      });

      return { token, ...existingUser };
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : "Error occurred while signing up",
      );
    }
  }
}
