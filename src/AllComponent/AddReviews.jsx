import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Swal from 'sweetalert2';
const AddReviews = () => {
  const handleReview = event => {
    event.preventDefault();
    const form = event.target;

    const userName = form.name.value;          
    const userEmail = form.email.value;         
    const gameTitle = form.title.value;         
    const reviewDescription = form.description.value; 
    const rating = form.rating.value;           
    const publishYear = form.year.value;        
    const gameCoverImage = form.coverImage.value; 
    const genre = form.genre.value;             

    const newReview = { userName, userEmail, gameTitle, reviewDescription, rating, publishYear, gameCoverImage, genre };
    console.log(newReview);
    fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) { 
                Swal.fire({
                    title: 'Success!',
                    text: 'Add Review successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                });
                form.reset(); 
            }
        })

       

  };

  return (
    <Fade cascade damping={0.1} duration={600}>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10 mb-5">
        <h2 className="text-2xl font-bold mb-6 text-center text-cyan-600">Add New Game Review</h2>

        <form onSubmit={handleReview} className="space-y-4">
          {/* Game Cover Image */}
          <div>
            <label className="block font-semibold mb-1 text-cyan-600">Game Cover Image URL</label>
            <input
              type="url"
              name="coverImage"
              required
              className="w-full p-2 border rounded"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Game Title */}
          <div>
            <label className="block font-semibold mb-1 text-cyan-600">Game Title</label>
            <input
              type="text"
              name="title"
              required
              className="w-full p-2 border rounded"
              placeholder="Enter game title"
            />
          </div>

          {/* Review Description */}
          <div>
            <label className="block font-semibold mb-1 text-cyan-600">Review Description</label>
            <textarea
              name="description"
              required
              rows="4"
              className="w-full p-2 border rounded"
              placeholder="Write your detailed review..."
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block font-semibold mb-1 text-cyan-600">Rating (1–10)</label>
            <input
              type="number"
              name="rating"
              
              className="w-full p-2 border rounded"
              placeholder="10"
            />
          </div>

          {/* Publishing Year */}
          <div>
            <label className="block font-semibold mb-1 text-cyan-600">Publishing Year</label>
            <input
              type="number"
              name="year"
              
              className="w-full p-2 border rounded"
              placeholder="2024"
            />
          </div>

          {/* Genre */}
          <div>
            <label className="block font-semibold mb-1 text-cyan-600">Genre</label>
            <select
              name="genre"
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Select Genre</option>
              <option value="Action">Action</option>
              <option value="RPG">RPG</option>
              <option value="Adventure">Adventure</option>
              <option value="Sports">Sports</option>
              <option value="Racing">Racing</option>
              <option value="Horror">Horror</option>
              <option value="Strategy">Strategy</option>
            </select>
          </div>

          {/* User Email */}
          <div>
            <label className="block font-semibold mb-1 text-cyan-600">User Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded bg-gray-100"
              
               // replace with logged-in user's email
            />
          </div>

          {/* User Name */}
          <div>
            <label className="block font-semibold mb-1 text-cyan-600">User Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded bg-gray-100"
              
              // replace with logged-in user's name
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </Fade>
  );
};

export default AddReviews;
