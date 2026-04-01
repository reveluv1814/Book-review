
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const result = await db.query("SELECT NOW()");
  return NextResponse.json({ time: result.rows[0] });
}
