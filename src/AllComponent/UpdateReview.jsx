import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";  
const UpdateReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [review, setReview] = useState({
    gameTitle: "",
    publishYear: "",
    rating: "",
    gameCoverImage: "",
    genre: "",
    userName: "",
    userEmail: "",
    reviewDescription: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/reviews/${id}`)
      .then((res) => setReview(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/reviews/${id}`, review);
      Swal.fire("Success!", "Your review has been updated.", "success"); 
      navigate("/myreviews");
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Failed to update review.", "error"); 
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-cyan-600">Update Review</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-cyan-600">Game Title</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={review.gameTitle}
            onChange={(e) => setReview({ ...review, gameTitle: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-cyan-600">Published Year</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={review.publishYear}
            onChange={(e) => setReview({ ...review, publishYear: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-cyan-600">Rating</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={review.rating}
            onChange={(e) => setReview({ ...review, rating: e.target.value })}
            min="0"
            max="10"
            step="0.1"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-cyan-600">Game Image URL</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={review.gameCoverImage}
            onChange={(e) => setReview({ ...review, gameCoverImage: e.target.value })}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-cyan-600">Genre</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={review.genre}
            onChange={(e) => setReview({ ...review, genre: e.target.value })}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-cyan-600">User Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={review.userName}
            onChange={(e) => setReview({ ...review, userName: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-cyan-600">User Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded"
            value={review.userEmail}
            onChange={(e) => setReview({ ...review, userEmail: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-cyan-600">Review Description</label>
          <textarea
            className="w-full border p-2 rounded"
            value={review.reviewDescription}
            onChange={(e) => setReview({ ...review, reviewDescription: e.target.value })}
            required
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition duration-200"
        >
          Update Review
        </button>
      </form>
    </div>
  );
};

export default UpdateReview;
