import React from 'react';

// components
import Icons from './Icons';

// IMAGES
import hotelImage1 from './../assets/hotel-1.jpg';
import hotelImage2 from './../assets/hotel-2.jpg';
import hotelImage3 from './../assets/hotel-3.jpg';

function GalleryCmp() {
  return (
    <div className="gallery">
      <figure className="gallery__item">
        <img src={hotelImage1} alt="image hotel 1" className="gallery__photo" />
      </figure>
      <figure className="gallery__item">
        <img src={hotelImage2} alt="image hotel 2" className="gallery__photo" />
      </figure>
      <figure className="gallery__item">
        <img src={hotelImage3} alt="image hotel 3" className="gallery__photo" />
      </figure>
    </div>
  );
}

export default GalleryCmp;
