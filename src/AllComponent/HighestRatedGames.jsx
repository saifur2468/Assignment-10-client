import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

function HighestRatedGames() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  const BASE_URL = "https://gaming-server-six.vercel.app"; // no trailing slash

  useEffect(() => {
    fetch(`${BASE_URL}/top-rated`)
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error(err));
  }, []);

  if (!games.length) return <div>Loading Top Rated Games...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        <Typewriter
          options={{
            strings: ["🔥 Highest Rated Games", "⭐ Top Gamers' Choice"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game._id}
            className="card bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-xl transition"
          >
            <figure>
              <img
                src={game.gameCoverImage}
                alt={game.gameTitle}
                className="w-full h-48 object-cover"
              />
            </figure>

            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{game.gameTitle}</h3>
              <p className="text-sm text-gray-500">Genre: {game.genre}</p>
              <p className="text-sm text-gray-600">
                Reviewed by: {game.userName} ({game.userEmail})
              </p>
              <p className="text-sm text-gray-600">Published Year: {game.publishYear}</p>
              <span className="inline-block bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                ⭐ {game.rating}
              </span>

              <button
                onClick={() => navigate(`/reviews/${game._id}`)}
                className="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HighestRatedGames;
