"use client";

import { useEffect } from "react";
// import { PiArrowsOutCardinalBold } from "react-icons/pi";

const Brand = ({ size = "text-2xl", animated = false }) => {
  useEffect(() => {
    const logo = document.getElementById("fancy-effect");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          logo?.classList.add("animate-brand");
        } else {
          logo?.classList.remove("animate-brand");
        }
      });
    });
    if (logo) {
      observer.observe(logo);
    }
  }, []);

  return (
    <h1
      className={`${size} flex items-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-600 font-nasa`}
    >
      <span>Soluciones Biomedicas Peruanas</span>
      {/* <PiArrowsOutCardinalBold
        className={`${size} text-cyan-500 font-extrabold`}
        id={animated ? "fancy-effect" : "other"}
      /> */}
    </h1>
  );
};
export default Brand;
