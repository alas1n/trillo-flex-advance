import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import API from "../Api/config";

//API KEYS
import { GoogleMapApiKey } from "./../Api/APIKeys";

// COMPONENTS:
import HotelCmp from "../components/HotelCmp";
import LogoCmp from "./../components/LogoCmp";
import SearchFiledCmp from "./../components/SearchFiledCmp";
import UserNavigationCmp from "../components/UserNavigationCmp";
import SidebarNavigationCmp from "../components/SidebarNavigationCmp";

class HotelsListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [null],
      pageNumber: 1,
      page_size: 50,
      num_of_pages: 100,
      loaded: 0,
      center: {
        lat: 32.986166,
        lng: 50.413963,
      },
      zoom: 14,
    };
  }

  getHotelData = async () => {
    console.log("geting data", this.state.pageNumber);
    const response = await API.get("/hotels_list", {
      params: {
        page: this.state.pageNumber,
        page_size: this.state.page_size,
      },
    });
    // console.log(response);
    this.setState((state, props) => {
      return {
        hotels: [...state.hotels, ...response.data.data],
        pageNumber: state.pageNumber + 1,
        num_of_pages: response.data.num_of_pages,
      };
    });
    console.log(this.state);
  };

  fetchNewData = async () => {
    if (this.state.pageNumber < this.state.num_of_pages - 1) {
      console.log("geting data", this.state.pageNumber);
      const response = await API.get("/hotels_list", {
        params: {
          page: this.state.pageNumber,
          page_size: this.state.page_size,
        },
      });
      if (response.status === 200) {
        this.setState((state, props) => {
          return {
            hotels: [...state.hotels, ...response.data.data],
            pageNumber: state.pageNumber + 1,
          };
        });
        console.log(this.state);
      }
    }
  };

  componentDidMount() {
    this.getHotelData();
  }

  render() {
    return (
      <div className="hotel-list-page-container">
        <header className="header">
          <LogoCmp />
          <SearchFiledCmp />
          <UserNavigationCmp />
        </header>
        <div className="hotel-list-page_content">
          <nav className="sidebar">
            <SidebarNavigationCmp />
            <div className="legal">
              &copy; 2020 by trillo. All right reserved.
            </div>
          </nav>
          <main className="hotels-list-view">
            {this.state.hotels.map((hotel, i) => {
              const htl = { ...hotel };
              if (i === 50) {
                this.fetchNewData();
              }
              return (
                <HotelCmp
                  key={String(htl.name)}
                  hotelName={htl.name}
                  hotelRating={htl.rate}
                  hotelAdress={htl.addr}
                  img={htl.pics}
                  num={i}
                />
              );
            })}
          </main>
          <div className="google-maps-wrapper">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: GoogleMapApiKey(),
              }}
              defaultCenter={this.state.center}
              defaultZoom={this.state.zoom}
            ></GoogleMapReact>
          </div>
        </div>
      </div>
    );
  }
}

export default HotelsListPage;
