import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AutSection/AuthoProvider";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/reviews?email=${user.email}`)
        .then((res) => {
          console.log("Server theke asha Data:", res.data); 
          setReviews(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-2xl font-bold">My Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {reviews.map((review) => (
          <MyReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
