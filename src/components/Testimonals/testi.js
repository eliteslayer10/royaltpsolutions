import React, { useState, useRef } from "react";
import { TestiSide } from "./style";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Mousewheel, Controller } from "swiper/core";
import { BoxArray } from "../../Array";

// Initialize Swiper modules
// SwiperCore.use([Mousewheel, Controller]);

export default function Test() {
  const swiperRef = useRef();
  const [firstSwiper, setFirstSwiper] = useState({});
  const [secondSwiper, setSecondSwiper] = useState({});

  return (
    <TestiSide>
      <div className="Test-Menu-Section">
        <div className="Test-Container">
          <div className="Test-Title-Section">
            <h1 className="Test-Title">Testimonials</h1>
            <span className="Test-Text">What Our Clients Say</span>
          </div>

          <Swiper
            style={{ width: "96vw" }}
            spaceBetween={0}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              300: { slidesPerView: 1 },
              400: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1170: { slidesPerView: 3 },
            }}
          >
            {BoxArray.map((item, index) => (
              <SwiperSlide
                style={{

                  display: "flex",
                  justifyContent: "center",
                  marginRight: "1px",

                }}
                key={index}
              >
                <div className="Box-Container">
                  <div className="Box-Section-menu">
                    <div className="Box-Image">
                      <img className="Box-Image1" src={item.img} alt="" />
                      <div className="Box-Person">
                        <span className="Person-Name">{item.desc}</span>
                        <span className="Cbo">{item.title}</span>
                      </div>
                    </div>

                    <div className="Box-Text-Section">
                      <p className="Box-Text">{item.name}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </TestiSide>

  );
}
