import React from 'react';

// IMAGES
import ImgFriend1 from '../assets/user-3.jpg';
import ImgFriend2 from '../assets/user-4.jpg';
import ImgFriend3 from '../assets/user-5.jpg';
import ImgFriend4 from '../assets/user-6.jpg';
import ImgUserReview1 from '../assets/user-1.jpg';
import ImgUserReview2 from '../assets/user-2.jpg';

// COMPONENTS
import UserReviewsCmp from './../components/UserReviewsCmp';
import InlineButtonCmp from './../components/InlineButtonCmp';

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
            <img src={ImgFriend1} alt="Friend 1" className="recommend__photo" />
            <img src={ImgFriend2} alt="Firend 2" className="recommend__photo" />
            <img src={ImgFriend3} alt="Firend 3" className="recommend__photo" />
            <img src={ImgFriend4} alt="Firend 4" className="recommend__photo" />
          </div>
        </div>
      </div>
      <div className="user-reviews">
        <UserReviewsCmp
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex."
          userName="Adam Smith"
          date="Feb 25rd, 2019"
          rate="7.8"
          photo={ImgUserReview1}
        />
        <UserReviewsCmp
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi."
          userName="Lady bug"
          date="Oct 25rd, 220"
          rate="9.3"
          photo={ImgUserReview2}
        />
        <InlineButtonCmp buttonName="Show all" span="&rarr;" />
      </div>
    </div>
  );
};

export default DetailCmp;
