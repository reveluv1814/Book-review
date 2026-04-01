import { SignupData } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import { SignupService } from "./signup.service";

export async function POST(req: NextRequest) {
  try {
    const body: SignupData = await req.json();
    const resultado = await new SignupService().signup(body);
    return NextResponse.json(
      { success: true, id: resultado.id },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Error al registrarse",
      },
      { status: 400 },
    );
  }
}
