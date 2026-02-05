import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import AllReviewcard from "./AllReviewcard";

const Reviews = () => {
  const loaderData = useLoaderData();

  
  const initialReviews = Array.isArray(loaderData)
    ? loaderData
    : loaderData?.data || [];

  const [review, setReview] = useState(initialReviews);

  useEffect(() => {
    setReview(initialReviews);
  }, [loaderData]);

  return (
    <div>
      <h1>Total Game Card: {review.length}</h1>

      <div className="grid md:grid-cols-2 gap-5">
        {review.map((singleReview) => (
          <AllReviewcard
            key={singleReview._id}
            review={singleReview}
            setReview={setReview}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
