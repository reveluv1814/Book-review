import { SignupData, User } from "@/types";
import { db } from "@/lib/db";

export class SignupRepository {
  constructor(private database = db) {}

  async createUser(data: SignupData): Promise<User> {
    const result = await this.database.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [data.name, data.email, data.password],
    );
    return result.rows[0];
  }

  async findUserByEmail(email: string) {
    const result = await this.database.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
    );
    return result.rows[0];
  }

  async findUserById(id: number) {
    const result = await this.database.query(
      "SELECT * FROM users WHERE id = $1",
      [id],
    );
    return result.rows[0];
  }
}
