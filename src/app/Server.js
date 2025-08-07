// lib/server.js

export const BASE_URL =
  // process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
process.env.NEXT_PUBLIC_STRAPI_URL || "https://strapi.video.accoladesweb.com";

export async function getHeroSection() {
  const res = await fetch(`${BASE_URL}/api/hero?populate=*`);
  // if (!res.ok) {
  //   throw new Error("Failed to fetch hero section");
  // }
  const json = await res.json();
  return json.data;
}

export async function getVideoCategories() {
  try {
    const res = await fetch(
      `${BASE_URL}/api/video-categories?populate[0]=videos&populate[1]=videos.video&populate[2]=videos.poster`
    );

    // if (!res.ok) {
    //   throw new Error("Failed to fetch video categories");
    // }

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

export async function getWhyBrandChoose() {
  try {
    const res = await fetch(`${BASE_URL}/api/why-brand?populate=*`);
    // if (!res.ok) {
    //   throw new Error("error to fetch the data");
    // }

    const json = await res.json();
    return json.data.brandVideos;
  } catch (error) {
    console.error("Error in fetching the data", error);
  }
}

export async function getOurPartner() {
  try {
    const res = await fetch(`${BASE_URL}/api/our-client?populate=*`);
    // if (!res.ok) {
    //   throw new Error("error to fetch the data");
    // }

    const json = await res.json();
    return json.data.clientLogo.map((item) => ({
      logo: BASE_URL + item.url,
    }));
  } catch (error) {
    console.error("Error in fetching the data", error);
  }
}

export async function getFeaturedParteners() {
  try {
    const res = await fetch(
      `${BASE_URL}/api/featured-work?populate[0]=parterVideos&populate[1]=parterVideos.video&populate[2]=parterVideos.image`
    );
    // if (!res.ok) {
    //   throw new Error("error to fetch the data");
    // }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error in fetching the data", error);
  }
}

export async function getWhatOurClientSays() {
  try {
    const res = await fetch(
      `${BASE_URL}/api/what-our-client-said?populate[0]=videoTestimonial&populate[1]=videoTestimonial.oneVideoofTest&populate[2]=videoTestimonial.onePosterImage&populate[3]=testText&populate[4]=testText.logo&populate[5]=testText.personImage`
    );
    // if (!res.ok) {
    //   throw new Error("error to fetch the data");
    // }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error in fetching the data", error);
  }
}

export async function getModalVideo() {
  try {
    const res = await fetch(`${BASE_URL}/api/modal?populate=*`);
    // if (!res.ok) {
    //   throw new Error("Failed to fetch modal video");
    // }
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error in fetching the modal video", error);
  }
}

export async function getBlogs() {
  try {
    const res =
      await fetch(`${BASE_URL}/api/blog-categories?populate[blogs][populate][0]=coverImage&populate[blogs][populate][1]=innerImage
`);
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error in fetching the blog content", error);
  }
}
