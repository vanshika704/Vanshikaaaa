"use client";

import { TracingBeam } from "./tracing-beam";
import { ShootingStarsAndStarsBackgroundDemo } from "./background";
import { FloatingDockDemo } from "../components/navbar1";

const TracingBeamDemo = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* ShootingStarsAndStarsBackgroundDemo positioned to cover the entire screen */}
      <div className="absolute inset-0 z-0">
        <ShootingStarsAndStarsBackgroundDemo />
      </div>

      {/* TracingBeam positioned absolutely on the left side */}
      <TracingBeam className="absolute left-20 top-0 h-full z-50 w-10 "> </TracingBeam>{/* Updated z-30 */}
        <div className="px-6 h-full flex flex-col mt-10 z-30"> {/* Ensure content also has z-30 */}
          {/* FloatingDockDemo component positioned above the stars background */}
          <div className="relative mt-10 z-40"> {/* Higher z-index for FloatingDockDemo */}
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
