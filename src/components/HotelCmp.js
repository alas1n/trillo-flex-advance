import React, { useState, useEffect } from "react";
import Repeat from "react-repeat-component";

// import axios from "axios";

// Assets:
import hotelImage from "./../assets/hotel-placeholder.png";

// ICONS
import { FaRegStar } from "react-icons/fa";

const HotelCmp = (props) => {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState(props.img);

  const fetchData = (urls) => {
    urls.map(async (url) => {
      try {
        const res = await fetch(`http://${url}`);
        if (res.status === 200) {
          // console.log(res.status);
          console.log(url);
          setImages(`http://${url}`);
        } else {
          setImages(hotelImage);
          console.log(res.status);
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    if (urls) {
      fetchData(urls);
    }
    return () => {
      // cleanup;
    };
  }, []);

  return (
    <div className="HotelCmp">
      <div className="HotelCmp_img_wrapper">
        <img
          src={images}
          alt=""
          className="HotelCmp_img_wrapper_img"
          // style={{ backgroundImage: urls(images) }}
        />
      </div>
      <div className="HotelCmp-detail">
        <div className="HotelCmp-detail_name-rate">
          <p className="HotelCmp-detail_name-rate--name">{props.hotelName}</p>
          {/* <p className="HotelCmp-detail_name-rate--rate">{props.hotelRating}</p> */}
          <Repeat times={props.hotelRating}>
            {(i) => (
              <FaRegStar
                key={i}
                id={`step-${i}`}
                className="HotelCmp-detail_name-rate--icon"
              ></FaRegStar>
            )}
          </Repeat>
        </div>
        <address className="HotelCmp-detail-rating_rating">
          {props.hotelAdress}
        </address>
      </div>
    </div>
  );
};

export default HotelCmp;
