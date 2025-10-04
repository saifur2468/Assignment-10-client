
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AllReviewcard = ({ reviews, onDelete }) => {
  const navigate = useNavigate();
 const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/reviews/${_id}`, { method: "DELETE" })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Card has been deleted.", "success");
              if (onDelete) onDelete(_id);
            }
          })
          .catch(err => console.error(err));
      }
    });
  };
  const handleClick = () => {
    navigate(`/reviews/${reviews._id}`);
  };

  const {
    _id,
    userName,
    userEmail,
    gameTitle,
    reviewDescription,
    rating,
    publishYear,
    gameCoverImage,
    genre,
  } = reviews;

  
 

  return (
    <div className="flex justify-center p-2 sm:p-4">
      <div className="card w-full sm:w-96 bg-base-100 shadow-xl rounded-2xl hover:shadow-2xl transition duration-300 border border-gray-200 m-2 sm:m-4">

        {/* Game Image + Rating Badge */}
        <figure className="relative">
          <img
            src={gameCoverImage}
            alt="game cover"
            className="w-full h-40 sm:h-56 object-cover rounded-t-2xl"
          />
          <span className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-green-600 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full shadow-md">
            ⭐ {rating}
          </span>
        </figure>

        {/* Card Body */}
        <div className="card-body px-3 sm:px-5 py-3 sm:py-4 space-y-2">
          <h2 className="card-title text-base sm:text-lg font-semibold text-gray-800">
            {gameTitle}
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm italic leading-relaxed">
            "{reviewDescription}"
          </p>

          <div className="mt-2 space-y-1 text-xs sm:text-sm text-gray-700">
            <p><span className="font-semibold">👤 User:</span> {userName}</p>
            <p><span className="font-semibold">📧 Email:</span> {userEmail}</p>
            <p><span className="font-semibold">📅 Year:</span> {publishYear}</p>
            <p><span className="font-semibold">🎮 Genre:</span> {genre}</p>
          </div>

          <div className="card-actions justify-end mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
            <button onClick={handleClick} 
              className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-sm font-medium rounded-lg shadow-md transition">
              View Details
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white text-sm sm:text-sm font-medium rounded-lg shadow-md transition">
              Delete card 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReviewcard;
