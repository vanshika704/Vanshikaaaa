"use client";

import ShootingStars from "../components/shooting-stars";
import StarsBackground from "../components/stars-baackground";
import { LensDemoThird } from "../components/projects";

function Page2() {
  return (
    <><div
      className="relative w-full flex"
      style={{ height: '100vh' }} // 4 times the viewport height
    >
      {/* Background components */}
      <StarsBackground className="absolute inset-0 w-full h-full" />
      <ShootingStars className="relative z-10" />

      {/* LensDemoThird positioned above the background */}
      <div className="absolute inset-0 flex items-center  z-20">
        <LensDemoThird />

      </div>
      <hr
        style={{
          boxShadow: '0 4px 15px rgba(255, 255, 255, 1)', // Strong white shadow
          border: 'none', // Remove default border
          height: '1px', // Set your desired hr height
          // Make the hr itself white
        }} />
<div className="text-white mt-60 text-2xl font-medium w-5/6 mr-40 font-poppins">Hi, I’m Vanshika, a creative and driven software engineer specializing in building seamless, high-performance applications using Flutter, Firebase, and React. I thrive on turning ideas into reality with clean, efficient code. Currently, I’m diving into the world of Node.js to expand my backend expertise. Lets build something amazing together</div>
  </div> </>
  );
}

export default Page2;
