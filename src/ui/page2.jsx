"use client";

import ShootingStars from "../components/shooting-stars";
import StarsBackground from "../components/stars-baackground";
import { LensDemoThird } from "../components/projects";

function Page2() {
  return (
    <div
      className="relative w-screen"
      style={{ height: '100vh' }} // 4 times the viewport height
    >
      {/* Background components */}
      <StarsBackground className="absolute inset-0 w-full h-full" />
      <ShootingStars className="relative z-10" />
      
      {/* LensDemoThird positioned above the background */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <LensDemoThird />
      </div>
    </div>
  );
}

export default Page2;
