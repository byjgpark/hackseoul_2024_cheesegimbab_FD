import * as React from "react";
import NaverMap from "./components/naver-map";
import BackButton from "@/components/ui/back-button";
// import { CarouselCards } from "./sections/carousel-cards";

const Page = async () => {
    return (
        <main>
            <BackButton/>
            <NaverMap></NaverMap>
        </main>
    );
};

export default Page;
