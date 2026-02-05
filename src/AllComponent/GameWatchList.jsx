import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";

const GameWatchList = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const userEmail = auth.currentUser?.email;

  useEffect(() => {
    if (!userEmail) return;

    axios
      .get(`https://gaming-server-six.vercel.app/watchlist/${userEmail}`)
      .then((res) => setWatchlist(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [userEmail]);

  if (!userEmail) {
    return <p className="text-center text-red-500 mt-10">⚠️ Please login first!</p>;
  }

  if (loading) return <p className="text-center mt-10">Loading watchlist...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-4">My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p className="text-center text-red-500">No games in watchlist</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Published Year</th>
              <th className="border px-4 py-2">Rating</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.map((item) => (
              <tr key={item._id}>
                <td className="border px-4 py-2">
                  <img
                    src={item.game.gameCoverImage}
                    alt={item.game.gameTitle}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td className="border px-4 py-2">{item.game.gameTitle}</td>
                <td className="border px-4 py-2">{item.game.publishYear}</td>
                <td className="border px-4 py-2">{item.game.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GameWatchList;
