import React from 'react';

// components
import Icons from './Icons';
import InlineButtonCmp from './InlineButtonCmp';

// IMAGES

function OverviewCmp() {
  return (
    <div className="overview">
      <h1 className="overview__heading">Hotel Las Palmas</h1>
      <div className="overview__stars">
        <Icons name={'icon-star'} className="overview__icon-star" />
        <Icons name={'icon-star'} className="overview__icon-star" />
        <Icons name={'icon-star'} className="overview__icon-star" />
        <Icons name={'icon-star'} className="overview__icon-star" />
        <Icons name={'icon-star'} className="overview__icon-star" />
      </div>
      <div className="overview__location">
        <Icons name="icon-location-pin" className="overview__icon-location" />
        <InlineButtonCmp buttonName="Albuferia, Portugal" />
      </div>
      <div className="overview__rating">
        <div className="overview__rating-average">8.6</div>
        <div className="overview__rating-count">429 vote</div>
      </div>
    </div>
  );
}

export default OverviewCmp;
