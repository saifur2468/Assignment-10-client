import React from 'react';
import { useLoaderData } from 'react-router-dom';
const GameDetaiels = () => {
    const reviews = useLoaderData();

    return (
        <div>
            <div className="flex flex-wrap justify-center">
      {reviews.map((review) => (
        <AllReviewcard key={review._id} reviews={review} />
      ))}
    </div>
        </div>
    );
};

export default GameDetaiels;