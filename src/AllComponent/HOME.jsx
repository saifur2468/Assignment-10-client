import React, { useState, useEffect } from "react";
import img1 from "../assets/bb0.1.webp";
import img2 from "../assets/herroban2.jpeg";
import img3 from "../assets/heroban1.jpg";
import TopDevelopers from './Topdevelopers';
import NewReleases from './NewReleases';
import Gamecard from './Gamecard';

const HeroCarousel = () => {
 
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
  <div>
       <div className="w-full h-[650px] relative overflow-hidden ">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
      
     </div>
     <Gamecard></Gamecard>
       <TopDevelopers />
       <NewReleases />
  </div>
     
  );
};

export default HeroCarousel;











