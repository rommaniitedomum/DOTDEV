import React from "react";
import { heroLinks } from "../../constants/data";

import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";

import "./HeroSection.css";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="hero-wrapper flex flex-col items-center mt-6">
      <h1 className="slogan lg:text-7xl sm:text-6x1 text-5x1 text-center leading-[1em] align-middle dark:text-neutral-300 text-neutral-700 tracking-[0.0235em]">
        AceDot Build Tools
        <span
          className="bg-gradient-to-r from-indigo-300 to-indigo-800 border-0
         text-transparent bg-clip-text">
          &nbsp; for Developers
        </span>
      </h1>
      <p className=" mt-10 text-lg text-center text-neutral-400 text-[1.125rem]  max-w-4xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, dolore
        vitae! Voluptatum odit harum quasi fuga unde nobis, quidem qui doloribus
        consequatur recusandae similique quia veniam maiores aliquam corrupti.
        Natus.
      </p>
      <div className="sub-links mt-10 flex gap-3">
        {heroLinks.map((link, index) => (
          <Link
            className="sub-links py-[0.75rem] px-[1.5rem] border text-neutral-400"
            key={index}
            to={link.to}>
            {link.text}
          </Link>
        ))}
      </div>

      <div className="video-wrapper flex flex-col md:flex-row mt-10 justify-center gap-2">
        <video
          className="rounded-lg w-full md:w-1/2 border border-indigo-700 shadow-sm shadow-indigo-400 my-auto mx-auto my-4 mx-2"
          autoPlay
          muted
          loop
          playsInline>
          <source src={video1} type="video/mp4" />
          현재 브라우저는 영상 재생을 지원하지 않습니다.
        </video>
        <video
          className="rounded-lg w-full md:w-1/2 border  border-indigo-700 shadow-sm shadow-indigo-400 my-auto mx-auto my-4 mx-2"
          autoPlay
          muted
          loop
          playsInline>
          <source src={video2} type="video/mp4" />
          현재 브라우저는 영상 재생을 지원하지 않습니다.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
