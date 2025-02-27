import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImage1 from "../../assets/banners/sliders (1).jpeg";
import sliderImage2 from "../../assets/banners/sliders (2).jpeg";
import sliderImage3 from "../../assets/banners/sliders (3).jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  const banners = [
    {
      image: sliderImage1,
      content: "Find the Perfect Home Loan for Your New Beginning",
    },
    {
      image: sliderImage2,
      content: "Get the Keys to Your New Car with Easy Financing",
    },
    {
      image: sliderImage3,
      content: "Your Trusted Partner for Fast and Easy Personal Loans",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {banners.map((banner, i) => (
        <SwiperSlide className="relative">
          <img
            key={i}
            src={banner.image}
            className="lg:!h-[80vh] rounded"
            alt=""
          />
          <div className="absolute top-0 bg-black/30 h-full w-full z-50 flex justify-center items-center rounded">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white">
              {banner.content}
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
