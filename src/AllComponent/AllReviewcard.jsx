import { useLoaderData } from "react-router-dom";
import MyReviewCard from "./MyReviewCard";

const BASE_URL = "https://gaming-server-six.vercel.app";

export const reviewsLoader = async () => {
  try {
    const res = await fetch(`${BASE_URL}/reviews`);
    if (!res.ok) throw new Error("Failed to fetch reviews");

    const data = await res.json();
    return Array.isArray(data) ? data : data.reviews || [];
  } catch (err) {
    console.error("Error fetching reviews:", err);
    return [];
  }
};

const AllReviewcard = () => {
  const reviews = useLoaderData();

  if (!Array.isArray(reviews) || !reviews.length)
    return <div className="text-center mt-10 text-cyan-600">No reviews found.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {reviews.map((review) => (
        <MyReviewCard key={review._id} review={review} />
      ))}
    </div>
  );
};

export default AllReviewcard;


















