"use client";
import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { cn } from "../utils";
import { Link } from "react-router-dom"; // Use React Router Link

 const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <Link
      className={cn(
        "relative group/pin z-50 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      to={href || "/"} // Use 'to' instead of 'href' for React Router
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 top-1/2 p-4 flex justify-start items-start rounded-7xl shadow-lg bg-zinc-950/[0.7] border border-white transition duration-700 overflow-hidden"
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </Link>
  );
};
export default PinContainer;
PinContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
};

export const PinPerspective = ({ title, href }) => {
    return (
      <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center z-50 transition duration-500">
        <div className="w-full h-full relative">
          <div className="absolute top-0 inset-x-0 flex justify-center">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10  rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-slate-800"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }} // Add a background color for visibility
            >
              <span className="relative text-white text-lg font-bold">
                {title}
              </span>
            </a>
          </div>
  
          {/* Animating Circles */}
          <div
            style={{
              perspective: "1000px",
              transform: "rotateX(70deg) translateZ(0)",
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {[0, 2, 4].map((delay) => (
              <motion.div
                key={delay}
                initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                animate={{
                  opacity: [0, 1, 0.5, 0],
                  scale: 1,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay,
                }}
                className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-white/[0.5] shadow-lg"
              ></motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };
  
  PinPerspective.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string,
  };