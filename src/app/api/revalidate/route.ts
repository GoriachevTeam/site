import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const secret = request.headers.get("x-revalidate-secret");

  if (secret !== process.env.WEBHOOK_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    revalidateTag("articles", "max");
    revalidateTag("prices", "max");
    revalidateTag("doctors", "max");
    revalidateTag("page", "max");

    console.log("Cache revalidated successfully!---------------------");

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json(
      { revalidated: false, error: (err as Error).message },
      { status: 500 },
    );
  }
}
