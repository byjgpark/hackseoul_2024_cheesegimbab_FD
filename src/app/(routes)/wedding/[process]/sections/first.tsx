import * as React from "react";
import Script from "next/script";

// import { CarouselCards } from "./sections/carousel-cards";


const First = () => {

  // const { naver } = window;

  const testData = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Bob" },
    { id: 5, name: "Bob" },
    { id: 6, name: "Bob" },
    { id: 7, name: "Bob" },
    { id: 8, name: "Bob" },
    { id: 9, name: "Bob" },
    { id: 10, name: "Bob" },
    { id: 11, name: "Bob" },
  ];

  return (
    <div>
      <div>
      {testData.map((item) => (
        <div key={item.id}>{item.name}</div>
        
      ))}
      </div>
    </div>
  );
};

export default First;
