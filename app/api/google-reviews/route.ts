import { NextResponse } from "next/server";

const placeSearchUrl = "https://places.googleapis.com/v1/places:searchText";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "GOOGLE_PLACES_API_KEY is not configured" },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(placeSearchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "places.rating,places.userRatingCount",
      },
      body: JSON.stringify({
        textQuery: "PROTECH PC - Muzon, Bulacan, Philippines",
        languageCode: "en",
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Google Places returned ${response.status}`);
    }

    const data = (await response.json()) as {
      places?: Array<{
        rating?: number;
        userRatingCount?: number;
      }>;
    };
    const place = data.places?.[0];

    if (
      typeof place?.rating !== "number" ||
      typeof place.userRatingCount !== "number"
    ) {
      throw new Error("Google Places returned no rating for the business");
    }

    return NextResponse.json({
      rating: place.rating,
      reviewCount: place.userRatingCount,
    });
  } catch (error: unknown) {
    console.error("Unable to load Google Places review summary.", error);
    return NextResponse.json(
      { error: "Unable to load Google review summary" },
      { status: 502 },
    );
  }
}
