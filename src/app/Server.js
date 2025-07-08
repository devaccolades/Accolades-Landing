// lib/server.js

export const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function getHeroSection() {
  const res = await fetch(`${BASE_URL}/api/hero?populate=*`);
  if (!res.ok) {
    throw new Error("Failed to fetch hero section");
  }
  const json = await res.json();
  return json.data;
}

export async function getVideoCategories() {
  try {
    const res = await fetch(
      `${BASE_URL}/api/video-categories?populate[0]=videos&populate[1]=videos.video&populate[2]=videos.poster`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch video categories");
    }

    const json = await res.json();

    // Transform response to match your expected output format
    return json.data.map((item) => ({
      name: item.collectionName,
      companyName: item.companyName,
      videoType: item.videoType,
      videos: item.videos.map((videoItem) => ({
        orientation: videoItem.orientation,
        video: BASE_URL + videoItem.video?.url,
        poster: BASE_URL + videoItem.poster?.url,
      })),
    }));
  } catch (error) {
    console.error("Error fetching video categories:", error);
    return [];
  }
}
