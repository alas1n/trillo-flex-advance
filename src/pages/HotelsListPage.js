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
// import MapContainer from "../components/map";

class HotelsListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [null],
      center: {
        lat: 32.986166,
        lng: 50.413963,
      },
      zoom: 14,
    };
  }

  getHotelData = async () => {
    console.log("clickd");
    const response = await API.get("/hotels_list");
    this.setState((state, props) => {
      return {
        hotels: response.data.data,
      };
    });
    console.log(this.state);
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
            {this.state.hotels.map((hotel) => {
              const htl = { ...hotel };
              return (
                <HotelCmp
                  hotelName={htl.name}
                  hotelRating={htl.rate}
                  hotelAdress={htl.addr}
                  img={htl.pics}
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
