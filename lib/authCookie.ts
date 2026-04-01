import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export async function verifyUser() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const user = verifyToken(token);
  return user;
}
