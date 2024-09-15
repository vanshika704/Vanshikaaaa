"use client";

import ShootingStars from "../components/shooting-stars";
import StarsBackground from "../components/stars-baackground";
import { LensDemoThird } from "../components/projects";

function Page2() {
  return (
    <div
      className="relative w-full"
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
    height: '1px',  // Set your desired hr height
    // Make the hr itself white
  }}
/>
    </div>
  );
}

export default Page2;
