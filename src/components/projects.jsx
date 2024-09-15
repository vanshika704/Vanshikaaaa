"use client";
import PropTypes from "prop-types";
import { Lens } from "./lens";

import { motion } from "framer-motion";
import { cn } from "../utils";

export function LensDemoThird() {
  return (
    <div>
      <Lens>
        <div
          className="w-full  relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] p-8 my-10"
        >
          <Rays />
          <Beams />
          <div className="relative z-10">
            <img
              src="src/assets/Untitled Project.jpg"
              alt="image"
              width={500}
              height={500}
              className="rounded-2xl"
            />
            <motion.div className="py-4 relative z-20">
              <h2 className="text-white text-2xl text-left font-bold ml-20">
               Vanshika Sharma
              </h2>
             
            </motion.div>
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
