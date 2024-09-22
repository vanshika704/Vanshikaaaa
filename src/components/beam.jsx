"use client";

import { ShootingStarsAndStarsBackgroundDemo } from "./background";
import { FloatingDockDemo } from "../components/navbar1";


const TracingBeamDemo1 = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* ShootingStarsAndStarsBackgroundDemo positioned to cover the entire screen */}
      <div className="absolute inset-0 z-0">
        <ShootingStarsAndStarsBackgroundDemo />
      </div>
     
    
      <div 
        className="px-6 h-full flex flex-col mt-10 relative z-30">
    
        <div className="relative lg:mt-2 sm:mt-0 sm:justify-start lg:justify-center z-40">
          <FloatingDockDemo />
        </div>
      </div>
     
    </div>
  );
};



export default TracingBeamDemo1;
