import React from 'react';

// IMAGES
import ImgFriend1 from '../assets/user-3.jpg';
import ImgFriend2 from '../assets/user-4.jpg';
import ImgFriend3 from '../assets/user-5.jpg';
import ImgFriend4 from '../assets/user-6.jpg';

const DetailCmp = () => {
  return (
    <div className="detail">
      <div className="description">
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
          dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas,
          ut corporis incidunt deserunt quae architecto voluptate.
        </p>
        <p className="paragraph">
          Accusantium cumque, quas, ut corporis incidunt deserunt quae
          architecto voluptate delectus, inventore iure aliquid aliquam.
        </p>
        <ul className="list">
          <li className="list__item">Close to the beach</li>
          <li className="list__item">Breackfast included</li>
          <li className="list__item">Free wifi in all rooms</li>
          <li className="list__item">Air conditioning and heating</li>
          <li className="list__item">Ptes allowed</li>
          <li className="list__item">We speak all languages</li>
          <li className="list__item">Perfect for all languages</li>
        </ul>
        <div className="recommend">
          <p className="recommend__count">
            Lucy and 3 other friends recommend this hotel.
          </p>
          <div className="recommend__friends">
            <img src={ImgFriend1} alt="Friend 1" className="recommend_photo" />
            <img src={ImgFriend2} alt="Firend 2" className="recommend_photo" />
            <img src={ImgFriend3} alt="Firend 3" className="recommend_photo" />
            <img src={ImgFriend4} alt="Firend 4" className="recommend_photo" />
          </div>
        </div>
      </div>
      <div className="user-reviews">user-reviews</div>
    </div>
  );
};

export default DetailCmp;
