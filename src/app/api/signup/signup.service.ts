import { SignupData, User } from "@/src/types/types";
import bcrypt from "bcryptjs";
import { SignupRepository } from "./signup.repository";

export class SignupService {
  constructor(private repository = new SignupRepository()) {}

  async signup(data: SignupData): Promise<User> {
    try {
      const { name, email, password } = data;

      if (!name || !email || !password) {
        throw new Error("All fields are required");
      }

      if (password.length < 6)
        throw new Error("Password must be at least 6 characters long");

      const existingUser = await this.repository.findUserByEmail(email);
      if (existingUser) {
        throw new Error("Email already registered");
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const userCreated = await this.repository.createUser({
        name,
        email,
        password: hashedPassword,
      });

      return userCreated;
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : "Error occurred while signing up",
      );
    }
  }
}
