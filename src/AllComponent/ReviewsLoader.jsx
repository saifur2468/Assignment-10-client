const BASE_URL = "https://gaming-server-six.vercel.app";

export const reviewsLoader = async () => {
  try {
    const res = await fetch(`${BASE_URL}/reviews`);
    if (!res.ok) throw new Error("Failed to fetch reviews");
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Error fetching reviews:", err);
    return [];
  }
};

