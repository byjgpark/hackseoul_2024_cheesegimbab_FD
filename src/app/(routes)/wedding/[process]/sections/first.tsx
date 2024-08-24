'use client'

import * as React from "react";
import Script from "next/script";
import { Separator } from "@radix-ui/react-separator";
import { useRouter, useSearchParams } from 'next/navigation'

// import { CarouselCards } from "./sections/carousel-cards";


const First = () => {

  // const { naver } = window;
  const router = useRouter()

  const testData = [
    { id: 1, name: "John test 123 123 123123 123 " },
    { id: 2, name: "Jane test 123 123 123123 123 " },
    { id: 3, name: "Bob test 123 123 123123 123 " },
    { id: 4, name: "Bob test 123 123 123123 123 " },
    { id: 5, name: "Bob test 123 123 123123 123 " },
    { id: 6, name: "Bob test 123 123 123123 123 " },
    { id: 7, name: "Bob test 123 123 123123 123 " },
    { id: 8, name: "Bob test 123 123 123123 123 " },
    { id: 9, name: "Bob test 123 123 123123 123 " },
    { id: 10, name: "Bob test 123 123 123123 123 " },
    { id: 11, name: "Bob test 123 123 123123 123 " },
  ];

  const handleClick = () => {
    // how to fix Error: No router instance found. You should only use "next/router" on the client side of your app.
  
    router.push(`/wedding/1/2`);
  }

  return (
    <div className="w-1/2">

      {testData.map((item) => (
        <>
        <div  key={item.id} onClick={() => handleClick()}>{item.name}</div>
        <Separator key={item.id} className="border border-black border-1" orientation="vertical"></Separator>
        </>
      ))}
    </div>
  );
};

export default First;
