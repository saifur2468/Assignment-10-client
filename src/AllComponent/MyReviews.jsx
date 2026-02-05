import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AutSection/AuthoProvider";
import MyReviewCard from "./MyReviewCard";

const BASE_URL = "https://gaming-server-six.vercel.app";

const MyReviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axios
        .get(`${BASE_URL}/myreviews?email=${user.email}`)
        .then((res) => {
          console.log("Server theke asha Data:", res.data);
          const data = Array.isArray(res.data) ? res.data : res.data.reviews;
          setReviews(data || []);
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [user?.email]);

  if (loading) return <div>Loading your reviews...</div>;

  if (!reviews.length)
    return <div className="text-center mt-10">You have no reviews yet.</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review) => (
          <MyReviewCard
            key={review._id}
            review={review}
            onDelete={(deletedId) =>
              setReviews(reviews.filter((r) => r._id !== deletedId))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
