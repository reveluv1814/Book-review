import { clearAuthCookie } from "@/src/lib/authCookie";

export async function POST() {
  return clearAuthCookie();
}
