import React from 'react';

// import '../sass/pages/MainPage.scss';
import Icons from './Icons';
import ProfileImage from './../assets/profile_mine.jpg';

function UserNavigationCmp() {
  return (
    <nav className="user-nav">
      <div className="user-nav__icon-box">
        <Icons className="user-nav__icon" name="icon-bookmark"></Icons>
        <span className="user-nav__notification">7</span>
      </div>
      <div className="user-nav__icon-box">
        <Icons className="user-nav__icon" name="icon-chat"></Icons>
        <span className="user-nav__notification">13</span>
      </div>
      <div className="user-nav__user">
        <img
          src={ProfileImage}
          alt="profile image"
          className="user-nav__user-photo"
        />
        <span className="user-nav_user-name">Ali</span>
      </div>
    </nav>
  );
}

export default UserNavigationCmp;
