import { SERVICES } from "../config";

const DJANGO_BASE = SERVICES.DJANGO;

if (!DJANGO_BASE) {
  throw new Error("NEXT_PUBLIC_DJANGO_API_URL is not defined");
}

async function request(url, options = {}) {
  const res = await fetch(`${DJANGO_BASE}${url}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Django API error ${res.status}: ${text}`);
  }

  return res.json();
}

/* ---- API functions ---- */

export function getCaseStudiesData() {
  return request("/api/case-studies/");
}
