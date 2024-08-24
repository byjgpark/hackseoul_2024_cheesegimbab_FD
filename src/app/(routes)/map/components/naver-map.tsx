"use client";

import * as React from "react";
import Script from "next/script";

// import { CarouselCards } from "./sections/carousel-cards";

const NaverMap = () => {
  // const { naver } = window;

  const initMap = (x: number, y: number) => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    });

    var mapMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(x, y),
      map: map,
    });
  };


  const mapElement = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {

    naver.maps.Service.geocode(
      {
        query: "서울 강남구 봉은사로63길 22 삼릉초등학교",
      },
      function (status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
          return alert("Someting Wrong!");
        }

        const result = response.v2.addresses[0];
        const x = Number(result.x);
        const y = Number(result.y);

        console.log("check x,y",x,y)

        initMap(y, x);
      }
    );


    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    });

    // Array of marker positions
    const locations = [
      { lat: 37.3595704, lng: 127.105399 },
      { lat: 38.3595704, lng: 128.105399 },
      { lat: 36.558515, lng: 126.937635 }, // Example of an additional marker
      // Add more locations as needed
    ];

    // var marker1 = new naver.maps.Marker({
    //   position: new naver.maps.LatLng(37.3595704, 127.105399),
    //   map: map,
    // });

    // var marker2 = new naver.maps.Marker({
    //   position: new naver.maps.LatLng(37.3595704, 130.105399),
    //   map: map,
    // });

    // Loop through the locations and create a marker for each
    locations.forEach((location) => {
      new naver.maps.Marker({
        position: new naver.maps.LatLng(location.lat, location.lng),
        map: map
      });
    });
  }, []);

  return (
    <div>
      <div id="map" ref={mapElement} className="w-1/2 h-[400px] mx-auto"></div>
    </div>
  );
};

export default NaverMap;
