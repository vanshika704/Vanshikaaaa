"use client";
import PropTypes from "prop-types";
import { Lens } from "./lens";
import img1 from '../assets/Untitled Project.jpg'

import { cn } from "../utils";

export function LensDemoThird() {
  return (
    <div>
      <Lens>
        <div
          className="w-full lg:mt-20 sm:mt-5 sm:ml-40  relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#3232334e] to-[#e3e3e54d] p-8 my-10"
        >
          <Rays />
          <Beams />
          <div className="relative z-10">
            <img 
              src={img1}
              alt="image"
              // width={500}
              // height={500}
              className="rounded-2xl lg:h-64 lg:w-96 sm:h-52 sm:w-60  "
            />
            
          </div>
        </div>
      </Lens>
    </div>
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
      className={cn("absolute left-0 top-0 pointer-events-none z-[1]", className)}
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
