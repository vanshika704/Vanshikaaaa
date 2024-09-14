"use client";

import ShootingStars from "./shooting-stars";
import StarsBackground from "./stars-baackground";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <StarsBackground className="absolute inset-0 w-full h-full" />
      <ShootingStars className="relative z-10" />
    </div>
  );
}
