import React from 'react';
import errorchibi from '../assets/errorim.JPG'
const ERROR = () => {
  return (
    <div>
      <h2 className='text-4xl text-center mt-5 font-serif text-red-500 m-auto'>404 | Page Not Found</h2>
       <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-4 py-10">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={errorchibi}
          alt="404 Error"
          className="max-w-full h-auto"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Oh No!</h1>
        <p className="text-gray-600 text-lg mb-6">
          Maybe Bigfoot has broken this page. Come back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
          <a
            href="/"
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Back to Homepage
          </a>
          <a
            href="/help"
            className="text-red-500 hover:underline"
          >
            Visit our help center
          </a>
        </div>
      </div>
    </div>
  
    </div>
  );
};

export default ERROR;
