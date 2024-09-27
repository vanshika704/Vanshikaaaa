"use client";
import { Link } from 'react-router-dom'; 
import PinContainer from "./3-dpin";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import image files
import foresthillImg from '../assets/foresthill/Screenshot (73).png';
import signupImg from '../assets/all/Screenshot (64).png';
import exponentiallyImg from '../assets/exponentially/Screenshot (59).png';
import weatherAppImg from '../assets/gdscweather/Screenshot (88).png';
import pratishthaImg from '../assets/pratishtha/Screenshot (46).png';
import socialMediaImg from '../assets/social media/Screenshot (65).png';
import todoImg from '../assets/todo/Screenshot (71).png';
import whatsappImg from '../assets/whatsapp/Screenshot_2024-08-08-20-05-29-42_dd8350f2a4d58b9e26f0ed7fbe7df0d9.jpg';
import youtubeCloneImg from '../assets/Youtube/Screenshot (232).png';

export function AnimatedPinDemo() {
  const slides = [
    { title: "ForestHill", src: foresthillImg },
    { title: "Sign up", src: signupImg },
    { title: "Exponentially", src: exponentiallyImg },
    { title: "Weather app", src: weatherAppImg },
    { title: "Pratishtha", src: pratishthaImg },
    { title: "Social Media", src: socialMediaImg },
    { title: "TODO", src: todoImg },
    { title: "Whatsapp", src: whatsappImg },
    { title: "YoutubeClone", src: youtubeCloneImg },
  ];

  return (
    <div className="animated-pin-demo-container w-screen">
      <div className="text-center text-slate-200 text-5xl mt-5 mb-2 font-medium font-poppins">PROJECTS</div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-[30rem] w-full">
              <PinContainer title={slide.title}>
                <Link to="/aboutme">
                  <div className="relative flex p-2 w-[20rem] h-[20rem] overflow-hidden">
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </Link>
              </PinContainer>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
