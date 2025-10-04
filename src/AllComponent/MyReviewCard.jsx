import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getAuth } from "firebase/auth";

const MyReviewCard = ({ review, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = (_id) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const userEmail = user?.email;

    if (!userEmail) {
      return Swal.fire("Error", "Please login to delete your review.", "error");
    }

    if (review.userEmail !== userEmail) {
      return Swal.fire("Error", "You can only delete your own review.", "error");
    }

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
        fetch(`http://localhost:5000/myreviews/${_id}?email=${userEmail}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your review has been deleted.", "success");
              if (onDelete) onDelete(_id);
            } else {
              Swal.fire("Error", "Failed to delete review.", "error");
            }
          })
          .catch(err => {
            console.error(err);
            Swal.fire("Error", "Something went wrong.", "error");
          });
      }
    });
  };

  return (
    <div className="border p-4 rounded-lg shadow bg-white">
      {review.gameCoverImage && (
        <img
          src={review.gameCoverImage}
          alt={review.gameTitle}
          className="w-full h-40 object-cover rounded-md mb-3"
        />
      )}

      <h3 className="font-bold text-lg text-cyan-600">{review.gameTitle}</h3>
      <p className="text-cyan-600">{review.reviewDescription}</p>
      <p className="text-sm text-cyan-600">Rating: {review.rating}</p>
      <p className="text-sm text-cyan-600">Year: {review.publishYear}</p>

      <div className="flex gap-2 mt-2">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded"
          onClick={() => navigate(`/updateReview/${review._id}`)}
        >
          Update
        </button>
        <button
          className="px-3 py-1 bg-red-500 text-white rounded"
          onClick={() => handleDelete(review._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyReviewCard;
