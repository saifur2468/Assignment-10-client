import { useNavigate } from "react-router-dom";

const AllReviewcard = ({ review }) => {
  const navigate = useNavigate();

  // Safe destructure
  const {
    gameTitle,
    reviewDescription,
    rating,
    userName,
    publishYear,
    gameCoverImage,
    _id,
  } = review || {};

  return (
    <div className="border p-4 rounded-xl shadow-md bg-white flex flex-col justify-between h-full">
      {/* Game Cover Image */}
      {gameCoverImage && (
        <img
          src={gameCoverImage}
          alt={gameTitle || "Game Cover"}
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}

      {/* Game Info */}
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">{gameTitle || "No Title"}</h2>

        {userName && (
          <p className="text-sm text-gray-600 mb-1">👤 Reviewer: {userName}</p>
        )}

        {rating !== undefined && (
          <p className="text-sm text-yellow-600 mb-2">⭐ Rating: {rating}</p>
        )}

        {publishYear && (
          <p className="text-sm text-gray-500 mb-2">📅 Published: {publishYear}</p>
        )}

        <p className="text-gray-700">{reviewDescription || "No Description"}</p>
      </div>

      {/* View Details Button */}
      {_id && (
        <button
          onClick={() => navigate(`/reviews/${_id}`)}
          className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Details
        </button>
      )}
    </div>
  );
};

export default AllReviewcard;
