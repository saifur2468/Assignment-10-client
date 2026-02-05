import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllReviewcard from './AllReviewcard';

const Reviews = () => {
  const reviews = useLoaderData();

  if (!Array.isArray(reviews) || reviews.length === 0) {
    return <div className="text-center mt-10 text-cyan-600">No reviews found.</div>;
  }

  return (
    <div className="p-4">
      <h1 className='text-center text-2xl font-serif text-cyan-500'>
        All Gaming Cards: {reviews.length}
      </h1>
      <div className='grid md:grid-cols-2 gap-4 mt-4'>
        {reviews.map((review) => (
          <AllReviewcard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
