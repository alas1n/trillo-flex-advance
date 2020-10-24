import React from 'react';

// components
import Icons from './Icons';

function SearchFiledCmp() {
  return (
    <form action="#" className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search hotels"
      />
      <button className="search__button">
        <Icons className="search__icon" name={'icon-magnifying-glass'} />
      </button>
    </form>
  );
}

export default SearchFiledCmp;
