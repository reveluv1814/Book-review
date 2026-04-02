import { NextRequest, NextResponse } from "next/server";
import { ReviewsService } from "./reviews.service";
import { CreateReviewData } from "@/types";

export async function GET() {
  try {
    const resultado = await new ReviewsService().getReviews();
    const response = NextResponse.json(
      { success: true, reviews: resultado },
      { status: 200 },
    );

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Error al obtener los datos",
      },
      { status: 400 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: CreateReviewData = await req.json();
    const resultado = await new ReviewsService().createReview(body);
    return NextResponse.json({ success: true, id: resultado }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Error al crear review",
      },
      { status: 400 },
    );
  }
}

/* export async function DELETE({ params }: { params: { id: string } }) {
  try {
    const reviewId = parseInt(params.id);
    const resultado = await new ReviewsService().deleteReview(reviewId);
    const response = NextResponse.json(
      { success: true, reviews: resultado },
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
} */
