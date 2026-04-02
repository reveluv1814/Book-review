import { cookies } from "next/headers";
import { verifyToken } from "@/src/lib/auth";
import { NextResponse } from "next/server";

export async function verifyUser() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const user = verifyToken(token);
  return user;
}

export async function clearAuthCookie() {
  const response = NextResponse.json({ status: 200 });

  response.cookies.set("token", "", {
    httpOnly: true,
    path: "/",
  });

  return response;
}
