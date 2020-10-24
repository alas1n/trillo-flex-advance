import React from 'react';

import '../sass/pages/MainPage.scss';

import LogoCmp from './../components/LogoCmp';
import SearchFiledCmp from './../components/SearchFiledCmp';
import UserNavigationCmp from '../components/UserNavigationCmp';

function Page() {
  return (
    <div className="container">
      <header className="header">
        <LogoCmp />
        <SearchFiledCmp />
        <UserNavigationCmp />
      </header>
      <div className="content">
        <nav className="sidebar">Navigation</nav>
        <main className="hotel-view">Hotel view</main>
      </div>
    </div>
  );
}

export default Page;
