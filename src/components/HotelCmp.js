import React from "react";

// Assets:
import hotelImage from "./../assets/SampleHotel.jpg";

const HotelCmp = (props) => {
  const image = props.img;
  console.log(typeof image);
  const hotelImp = props.img === "" ? hotelImage : props.img;
  return (
    <div className="HotelCmp">
      <img src={hotelImp} alt="" className="HotelCmp_img" />
      <div className="HotelCmp-detail">
        <div className="HotelCmp-detail_name-rate">
          <p className="HotelCmp-detail_name-rate--name">{props.hotelName}</p>
          <p className="HotelCmp-detail_name-rate--rate">{props.hotelRating}</p>
        </div>
        <p className="HotelCmp-detail-rating_rating">{props.hotelAdress}</p>
      </div>
    </div>
  );
};

export default HotelCmp;
