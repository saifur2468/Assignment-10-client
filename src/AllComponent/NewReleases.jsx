import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const NewReleases = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('/Gamedata.json') 
      .then(res => res.json())
      .then(data => setGames(data));
  }, []);

  return (
    <section className="my-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">🕹️ New Releases</h2>
      <Marquee pauseOnHover={true} speed={40} gradient={false}>
        {games.map((game) => (
          <div key={game.id} className="mx-4 w-60 flex-shrink-0">
            <img
              src={game.img}
              alt={game.name}
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
            <p className="mt-2 text-center font-semibold">{game.name}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default NewReleases;
