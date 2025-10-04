import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { getAuth } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";

const ReviewDetails = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);

  const auth = getAuth();
  const userEmail = auth.currentUser?.email; 

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => setReview(data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleWatchlist = async () => {
    if (!userEmail) {
      toast.error("⚠️ Please login to add watchlist", { position: "top-right" });
      return;
    }

    try {
      await axios.post("http://localhost:5000/watchlist", {
        userEmail,
        game: {
          gameTitle: review.gameTitle,
          rating: review.rating,
          publishYear: review.publishYear,
          gameCoverImage: review.gameCoverImage,
        },
      });
      toast.success("✅ Added to Watchlist!", { position: "top-right" });
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "❌ Error adding to watchlist", {
        position: "top-right",
      });
    }
  };

  if (!review) return <div>Loading review...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-200 mt-6">
      <img
        src={review.gameCoverImage}
        alt={review.gameTitle}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{review.gameTitle}</h2>
        <span className="bg-green-600 text-white px-3 py-1 rounded-full shadow-md">
          ⭐ {review.rating}
        </span>
      </div>

      <p className="text-sm text-gray-500 mb-4">Genre: {review.genre}</p>
      <p className="text-gray-700 mb-4">{review.reviewDescription}</p>
      <p className="text-sm text-gray-600 mb-4">
        Reviewed by: <span className="font-medium">{review.userName}</span> ({review.userEmail})
      </p>
      <p className="text-sm text-gray-600 mb-4">Published Year: {review.publishYear}</p>

      <div className="flex space-x-4 mt-6">
        <button
          onClick={handleWatchlist}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Add To Watchlist
        </button>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default ReviewDetails;
