"use client";

import ShootingStars from "../components/shooting-stars";
import StarsBackground from "../components/stars-baackground"; // Fixed typo in import

import PropTypes from 'prop-types'; // Added missing import for PropTypes
import { Lens } from "../components/lens";
import CombinedCardDemo from "../components/skills";

function Page3() {
  return (
    <>
      <div className="relative w-full flex flex-col lg:flex-row" style={{ height: '100vh' }}>
        {/* Background components */}
        <StarsBackground className="absolute inset-0 w-full h-full" />
        <ShootingStars className="relative z-10" />

        {/* LensDemoThird positioned above the background */}
        <div className="absolute inset-0 flex lg:items-center z-20">
          <CombinedCardDemo/>
        </div>

        {/* HR with styling */}
        <hr
          style={{
            boxShadow: '0 4px 15px rgba(255, 255, 255, 1)', // Strong white shadow
            border: 'none', // Remove default border
            height: '1px', // Set your desired hr height
          }}
        />

        {/* Lens component */}
        <div className="absolute inset-0 flex items-center justify-center z-20 p-4 lg:p-0">
          <Lens>
            <div className="w-full mt-20 ml-0 sm:mt-96 lg:mt-20 lg:ml-96 relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#3232334e] to-[#e3e3e54d] p-8 my-10">
              <Rays />
              <Beams />
              
            </div>
          </Lens>
        </div>
      </div>
    </>
  );
}

// Beams component
const Beams = () => {
  return (
    <svg
      width="380"
      height="315"
      viewBox="0 0 380 315"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
    >
      {/* SVG content */}
    </svg>
  );
};

// Rays component with prop validation
const Rays = ({ className }) => {
  return (
    <svg
      width="380"
      height="397"
      viewBox="0 0 380 397"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute left-0 top-0 pointer-events-none z-[1] ${className}`}
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
  className: '',
};

export default Page3;
