"use client";

import ShootingStars from "../components/shooting-stars";
import StarsBackground from "../components/stars-baackground"; // Fixed typo in import

import PropTypes from "prop-types"; // Added missing import for PropTypes


import { AnimatedPinDemo } from "../components/projects1";

function Page4() {
  return (
    <>
      {/* Top hr */}
      <hr
          style={{
            boxShadow: '0 4px 15px rgba(255, 255, 255, 1)', // Strong white shadow
            border: 'none', // Remove default border
            height: '1px',
            marginTop:'0px' // Set your desired hr height
          }}
        />
      <div className="relative w-full flex flex-col lg:flex-row h-screen  bg-neutral-900 " >
        {/* Background components */}
        <StarsBackground className="absolute inset-0 w-full h-full"/>
        <ShootingStars className="relative z-10" />

        {/* CombinedCardDemo positioned above the background */}
        <div className="absolute inset-0 flex justify-center  lg:items-center z-20 sm:mt-96 lg:mt-0  w-screen">
       <AnimatedPinDemo />
        </div>
      </div>

     
      {/* <hr className="mx-auto w-4/5 h-1 bg-white shadow-md md:w-1/5 lg:w-2/5" /> */}
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

export default Page4;
