import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import OfferData from "./../offerData.json"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <>
            <div className="container">
                <h1 className="text-center">Grab the exciting deals and offers with All Bank</h1>
                <Swiper
                    slidesPerView={4}
                    centeredSlides={false}
                    spaceBetween={30}
                    navigation={true}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwipe list-of-card"
                >
                    {
                        OfferData.map(offerdata => {
                            return (
                                <SwiperSlide  key={offerdata.id}>
                                    <div className="card-box">
                                        <div className={`offers-card ${offerdata.bgstyle}`}>
                                            <h4 className="hd28">{offerdata.title}</h4>
                                            <p>{offerdata.description}</p>
                                            <img src={offerdata.image} alt={offerdata.caption} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    );
}
