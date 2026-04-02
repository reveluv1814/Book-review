import { redirect } from "next/navigation";
import { verifyUser } from "@/src/lib/authCookie";
import LoaderAuth from "@/src/components/LoaderAuth";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    await verifyUser();
  } catch {
    redirect("/login");
  }

  return <LoaderAuth>{children}</LoaderAuth>;
}
