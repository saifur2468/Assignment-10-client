import React from "react";
import { useLoaderData } from "react-router-dom";
import MyReviewCard from "./MyReviewCard";

const Reviews = () => {
  const reviews = useLoaderData();

  // Safety check: reviews array না হলে empty array
  const reviewsArray = Array.isArray(reviews) ? reviews : [];

  if (reviewsArray.length === 0) {
    return (
      <div className="text-center mt-10 text-cyan-600">
        No reviews found.
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-serif text-cyan-500">
        All Gaming Reviews ({reviewsArray.length})
      </h1>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {reviewsArray.map((review) => (
          <MyReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
