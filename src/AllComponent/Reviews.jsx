import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllReviewcard from './AllReviewcard';

const Reviews = () => {
    const reviews = useLoaderData();
    return (
        <div>
            <h1 className='text-center text-2xl font-serif text-cyan-500'>all gaming card:{reviews.length}</h1>
           <div className='grid md:grid-cols-2 gap-4'>
             {
              reviews.map(reviews => <AllReviewcard
              key={reviews._id}
              reviews={reviews}
              >

              </AllReviewcard>)
            }
           </div>
        </div>
    );
};

export default Reviews;