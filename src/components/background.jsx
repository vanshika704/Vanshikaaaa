"use client";

import { FlipWordsDemo } from "./iam";
import ShootingStars from "./shooting-stars";
import StarsBackground from "./stars-baackground";


export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <StarsBackground className="absolute inset-0 w-full h-full" />
      <ShootingStars className="relative z-10" />

      {/* Circular Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <FlipWordsDemo/>
        <div className="ml-96 w-96 h-96 absolute right-10">
          <img
            src="src/assets/fotor-ai-20240914221650-removebg-preview (1).png" // Replace with your image path
            alt="Circular Image"
          
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
