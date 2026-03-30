import { SERVICES } from "../config";

const DJANGO_BASE = SERVICES.DJANGO;

if (!DJANGO_BASE) {
  throw new Error("NEXT_PUBLIC_DJANGO_API_URL is not defined");
}

async function request(url, options = {}) {
  const res = await fetch(`${DJANGO_BASE}${url}`, {
    headers: {
      cache: "no-store",
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const text = await res.text();
    console.log("API ERROR RESPONSE:", text); 
    throw new Error(`Django API error ${res.status}: ${text}`);
  }

  return res.json();
}

/* ---- API functions ---- */

export function getCaseStudiesData() {
  return request("/api/case-studies/");
}

// SEO - List
export function getSeoList() {
  return request("/api/seo/");
}

// SEO - Detail (by name)
export function getSeoByName(name) {
  return request(`/api/seo/${name}/`);
}

// Blogs - List
export async function getBlogs() {
  const res = await request("/api/blogs/");
  return res.data; 
}

// Blog - Detail (by slug)
export function getBlogBySlug(slug) {
  return request(`/api/blogs/${slug}`);
}