import { NextRequest, NextResponse } from "next/server";
import { ReviewsService } from "../reviews.service";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const reviewId = parseInt(id);

    if (isNaN(reviewId)) {
      return NextResponse.json(
        { success: false, error: "Invalid review ID" },
        { status: 400 },
      );
    }

    const resultado = await new ReviewsService().deleteReview(reviewId);
    const response = NextResponse.json(
      { success: true, id: resultado },
      { status: 200 },
    );

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Error al eliminar el review",
      },
      { status: 400 },
    );
  }
}
