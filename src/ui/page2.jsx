"use client";

import ShootingStars from "../components/shooting-stars";
import StarsBackground from "../components/stars-baackground";
import { LensDemoThird } from "../components/projects";

function Page2() {
  return (
    <div
      className="relative w-full"
      style={{ height: '100vh' }} // Full viewport height
    >
      {/* Background components */}
      <StarsBackground className="absolute inset-0 w-full h-full" />
      <ShootingStars className="relative z-10" />
      
      {/* Container for LensDemoThird and hr */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 space-y-4">
        {/* Horizontal rule with shadow */}
       
        
        {/* LensDemoThird positioned below the hr */}
        <LensDemoThird />
      </div>
    </div>
  );
}

export default Page2;
