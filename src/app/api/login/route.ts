import { LoginData } from "@/src/types/types";
import { NextRequest, NextResponse } from "next/server";
import { LoginService } from "./login.service";

export async function POST(req: NextRequest) {
  try {
    const body: LoginData = await req.json();
    const resultado = await new LoginService().login(body);
    const response = NextResponse.json(
      { success: true, user: { id: resultado.id, name: resultado.name } },
      { status: 200 },
    );

    response.cookies.set("token", resultado.token, {
      httpOnly: true,
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Error al logearse",
      },
      { status: 400 },
    );
  }
}
