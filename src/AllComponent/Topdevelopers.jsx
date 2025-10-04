import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Topdevelopers = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    fetch('/Developer.json')
      .then(res => res.json())
      .then(data => setDevelopers(data));
  }, []);

  return (
    <div>
      <h1 className='text-3xl font-bold mb-6 text-center text-cyan-600'>
        <Typewriter
          words={['Top Developer']}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>

      <div className="flex items-center justify-center mt-5 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl w-full">
          {developers.map(dev => (
            <div
              key={dev.id}
              className="card bg-base-100 shadow-md rounded-lg overflow-hidden text-gray-900"
            >
              <figure>
                <img src={dev.img} alt={dev.name} className="h-60 w-full object-cover" />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-xl font-bold text-cyan-600">{dev.name}</h2>
                <p className="mt-2 text-sm text-cyan-600">Popular Game: {dev.popularGame}</p>
                <p className="text-sm text-cyan-600">Country: {dev.country}</p>
                <div className="card-actions justify-end mt-4 space-x-2">
                  <div className="badge badge-outline text-cyan-600 ml-2">Users: {dev.users.toLocaleString()}</div>
                  <div className="badge badge-outline text-cyan-600">Downloads: {dev.downloads.toLocaleString()}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topdevelopers;
