"use client";

import { ShootingStarsAndStarsBackgroundDemo } from "./background";
import { FloatingDockDemo } from "../components/navbar1";

const TracingBeamDemo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* ShootingStarsAndStarsBackgroundDemo positioned to cover the entire screen */}
      <div className="absolute inset-0 z-0">
        <ShootingStarsAndStarsBackgroundDemo />
      </div>

      {/* TracingBeam positioned absolutely on the left side */}
      {/* Use fixed positioning for visibility */}
      <div 
        className="px-6 h-full flex flex-col mt-10 relative z-30"
       
      >
        {/* FloatingDockDemo component positioned above the stars background */}
        <div className="relative mt-2 z-40">
          <FloatingDockDemo />
        </div>
      </div>
    </div>
  );
};

TracingBeamDemo.propTypes = {
  // Define any additional PropTypes if needed
};

export default TracingBeamDemo;
