import React, { useState, useEffect } from "react";
import Repeat from "react-repeat-component";

// Assets:
import hotelImage from "./../assets/hotel-placeholder.png";

// ICONS
import { FaRegStar } from "react-icons/fa";

const HotelCmp = (props) => {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState(props.img);

  const fetchData = (urls) => {
    urls.map(async (url) => {
      await fetch(`http://${url}`)
        .then((response) => {
          if (response.ok) {
            setImages(`http://${url}`);
          } else {
            setImages(hotelImage);
          }
          throw new Error("Network response was not ok.");
        })
        .catch(function (error) {
          console.log(
            "There has been a problem with your fetch operation: ",
            error.message
          );
        });
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
      <p className="HotelCmp-detail_name-rate--name">{props.num}</p>
      <div className="HotelCmp_img_wrapper">
        <img src={images} alt="" className="HotelCmp_img_wrapper_img" />
      </div>
      <div className="HotelCmp-detail">
        <div className="HotelCmp-detail_name-rate">
          <p className="HotelCmp-detail_name-rate--name">{props.hotelName}</p>
          {props.hotelRating ? (
            <Repeat times={props.hotelRating}>
              {(i) => (
                <FaRegStar
                  key={i}
                  id={`step-${i}`}
                  className="HotelCmp-detail_name-rate--icon"
                ></FaRegStar>
              )}
            </Repeat>
          ) : undefined}
        </div>
        <address className="HotelCmp-detail-rating_rating">
          {props.hotelAdress}
        </address>
      </div>
    </div>
  );
};

export default HotelCmp;
