"use client";

import ShootingStars from "../components/shooting-stars";
import Social from "../components/social";
import StarsBackground from "../components/stars-baackground"; // Fixed typo in import

import PropTypes from "prop-types"; // Added missing import for PropTypes


function Page5() {
  return (
    <>
     <hr
          style={{
            boxShadow: '0 4px 15px rgba(255, 255, 255, 1)', // Strong white shadow
            border: 'none', // Remove default border
            height: '1px',
            // marginTop:'200px' // Set your desired hr height
          }}
        />
     <div className="relative w-full flex flex-col lg:flex-row dark:bg-neutral-900 lg:h-screen sm:h-[400vh]" >
        {/* Background components */}
        <StarsBackground className="absolute inset-0 w-full h-full" />
        <ShootingStars className="relative z-10" />
     
        <div className="absolute inset-0 flex justify-center bg-transparent lg:items-center z-20 sm:mt-96 lg:mt-0">
        {/* LensDemoThird positioned above the background */}
       <Social/>
       </div>
        {/* HR with styling */}
    
      </div>
      </>
  );
}

  
// Rays component with prop validation
const Rays = ({ className }) => {
  return (
    <svg
      width="380"
      height="397"
      viewBox="0 0 380 397"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute left-0 top-0 pointer-events-none z-10 ${className}`}
    >
      {/* SVG content */}
    </svg>
  );
};

// Prop validation for Rays component
Rays.propTypes = {
  className: PropTypes.string,
};

// Default props for Rays component (optional)
Rays.defaultProps = {
  className: "",
};

export default Page5;
