"use client";

import { FlipWordsDemo } from "./iam";
import ShootingStars from "./shooting-stars";
import StarsBackground from "./stars-baackground";

import { TracingBeam } from "./tracing-beam";
export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div
      className="relative w-screen"
      style={{ height: '400vh' }} // 4 times the viewport height
    >
      {/* Background components */}
      <StarsBackground className="absolute inset-0 w-full h-full" />
      <ShootingStars className="relative z-10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col lg:flex-row p-4 z-20">
      <TracingBeam className="fixed left-20 top-0 h-full z-50 w-10" />
        <FlipWordsDemo />

        {/* Circular Image */}
        <div className="w-48 h-48 sm:w-52 sm:h-52 sm:mt-20 sm:mr-52 md:w-72 md:h-72 md:mt-20 lg:w-96 lg:h-96 mt-8 lg:mt-32 lg:ml-96 absolute right-10">
          <img
            src="src/assets/fotor-ai-20240914221650-removebg-preview (1).png" // Replace with your image path
            alt="Circular Image"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Page2 Component */}
     
    </div>
  );
}
