import React from 'react';

const UserReviewsCmp = ({ text, userName, date, photo, rate }) => {
  return (
    <figure className="review">
      <blockquote className="review__text">{text}</blockquote>
      <figcaption className="review__user">
        <img src={photo} alt="User 1" className="review__photo" />
        <div className="review__user-box">
          <p className="review__user-name">{userName}</p>
          <p className="review__user-date">{date}</p>
        </div>
        <div className="review__rating">{rate}</div>
      </figcaption>
    </figure>
  );
};

export default UserReviewsCmp;
