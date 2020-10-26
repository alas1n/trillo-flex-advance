import React from 'react';

import '../sass/pages/MainPage.scss';

import LogoCmp from './../components/LogoCmp';
import SearchFiledCmp from './../components/SearchFiledCmp';
import UserNavigationCmp from '../components/UserNavigationCmp';
import SidebarNavigationCmp from '../components/SidebarNavigationCmp';

function Page() {
  return (
    <div className="container">
      <header className="header">
        <LogoCmp />
        <SearchFiledCmp />
        <UserNavigationCmp />
      </header>
      <div className="content">
        <nav className="sidebar">
          <SidebarNavigationCmp />
          <div className="legal">
            &copy; 2020 by trillo. All right reserved.
          </div>
        </nav>
        <main className="hotel-view">Hotel view</main>
      </div>
    </div>
  );
}

export default Page;
