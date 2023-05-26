import React, { useEffect, useState } from 'react';
import './Carousel.css';

const ACCESS_KEY = 'GXeqDKaA5Wl9wGsKVlzwffueCV5vU7zYUeONkxUVdsw';

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?count=5&client_id=${ACCESS_KEY}`
        );
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((image, index) => (
          <div
            className={index === activeIndex ? 'slide active' : 'slide'}
            key={image.id}
            style={{ backgroundImage: `url(${image.urls.regular})` }}
          ></div>
        ))}
      </div>

      <div className="button-container">
        <button className="arrow prev" onClick={prevSlide}>
          &#10094;  {/* to do: поменять на svg */}
        </button> 

        <div className='indicator-container'>
          {images.map((_, index) => (
            <div
              className={index === activeIndex ? 'indicator active' : 'indicator'}
              key={index}
            ></div>
          ))}
        </div>

        <button className="arrow next" onClick={nextSlide}>
          &#10095; 
        </button>  {/* to do: поменять на svg */}
      </div>

    </div>
  );
};

export default Carousel;
