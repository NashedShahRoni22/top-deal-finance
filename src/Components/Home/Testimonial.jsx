import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonial() {
  const data = [
    {
      name: "Jennifer Smith",
      position: "Mortgage Specialist",
      desc: "Top Deal Finance helped me secure the best mortgage deal for my first home. Their team’s expertise, patience, and personalized approach made the entire process smooth and stress-free. I highly recommend them for anyone looking to navigate the mortgage process!",
    },
    {
      name: "Michael Johnson",
      position: "Loan Officer",
      desc: "Top Deal Finance was a game-changer for us. Their deep knowledge of the mortgage industry and tailored advice helped us secure a loan that fit our financial goals perfectly. Their team was supportive every step of the way, making the entire experience seamless.",
    },
    {
      name: "Emily Davis",
      position: "Real Estate Agent",
      desc: "I work closely with Top Deal Finance for many of my clients, and I’ve seen firsthand how they go above and beyond to secure the best mortgage deals. Their professional team is always accessible, knowledgeable, and delivers on time. A trusted partner in the home buying journey!",
    },
    {
      name: "David Thompson",
      position: "Homeowner",
      desc: "Working with Top Deal Finance was a fantastic experience. They not only provided great rates but also guided me through each step of the process. I’m incredibly grateful for their support and would recommend them to anyone in need of a reliable mortgage company.",
    },
    {
      name: "Sophia Lee",
      position: "Client Relationship Manager",
      desc: "Top Deal Finance offers exceptional customer service. The team made sure to explain all the available options to me and helped me choose the right mortgage for my needs. They were with me every step of the way, making the process stress-free and easy to understand.",
    },
    {
      name: "Alex Wilson",
      position: "Business Owner",
      desc: "As a business owner, I needed a mortgage that fit both my personal and business needs. Top Deal Finance offered a solution that worked perfectly for me. Their expertise and transparency made them stand out from other lenders, and I highly recommend their services to anyone in need of mortgage assistance.",
    },
  ];

  return (
    <div className="!p-8 md:!p-16 bg-gray-400 md:rounded">
      <h2 className="text-center text-white text-4xl md:text-6xl font-semibold mt-5">
        What Our Clients Says?
      </h2>
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            // Small screens (up to 640px)
            0: {
              slidesPerView: 1,
            },
            // Large screens (from 769px and above)
            1024: {
              slidesPerView: 2,
            },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper !p-5 md:!p-10 mt-5"
        >
          {data.map((d, i) => (
            <SwiperSlide key={i}>
              <div className="relative !p-4 sm:!p-6 md:!p-8 lg:!p-10 bg-white text-black shadow-xl">
                <div className="flex justify-center">
                  <FaQuoteLeft className="text-4xl sm:text-5xl lg:text-6xl text-[#CEB666]" />
                </div>
                <p className="text-base sm:text-lg lg:text-xl !my-2 sm:!my-4">
                  {d.desc}
                </p>
                <div className="flex justify-center items-center gap-1 text-[#CEB666] text-base sm:text-xl lg:text-2xl my-2 sm:my-4">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <div className="text-sm sm:text-base lg:text-lg">
                  <p className="font-semibold !my-2">{d.name}</p>
                  <p className="">{d.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-5 flex gap-2 justify-center"></div>
      </>
    </div>
  );
}
