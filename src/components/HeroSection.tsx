"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import MagicButton from './ui/MagicButton';
import Button from './ui/Button';
import { FaRegMessage, FaLinkedinIn } from "react-icons/fa6";
import { VscGithubProject } from "react-icons/vsc";
import { FaGithub, FaRegEnvelope } from "react-icons/fa";
import { PiMouseScrollThin } from "react-icons/pi";

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] text-white">
    <div className="flex flex-col md:flex-row lg:flex-row items-center lg:items-center mt-2 sm:mt-2 md:mt-36 lg:mt-48 px-4 sm:px-6 md:px-8 lg:px-12 select-none">
      {/* LEFT */}
      <div className="flex flex-col w-full sm:w-full md:w-1/2 lg:w-1/2 md:items-start lg:items-start text-center md:text-start lg:text-start mb-8 lg:mb-0">
        <h1 className="uppercase text-xs sm:text-xs md:text-xs lg:text-sm font-semibold tracking-widest">
          Learning, One Day at a Time
        </h1>
        <h1 className="mt-0 md:mt-0 lg:mt-0 text-4xl sm:text-5xl md:text-4xl lg:text-5xl lg:leading-normal font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5a3a82] via-[#725bab] to-[#cdcbff]">Hello, I&apos;m Holly
          </span>
          <br/>
          < TypeAnimation
            sequence={[
              "Web Developer ;",
              2000,
              "UI/UX Enthusiast",
              2000
            ]}
            wrapper="span"
            speed={3}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>
        <p className="mt-4 px-2 sm:px-4 md:px-0 lg:px-0 text-justify text-xl tracking-tight">
        With a bachelor&apos;s degree in software development and an insatiable passion for learning, I thrive on exploring cutting-edge technologies and innovative tools. I&apos;m dedicated to continuous growth and excited to bring creative solutions to life.
        </p>
        {/* ICONS SECTION */}
        <div className="flex mt-10 space-x-8 justify-center md:justify-start lg:justify-start">
          <a href="https://github.com/HollyGunning" target="_blank" className="hover:text-purple-100 hover:-translate-y-1 transition-transform duration-500 ease-in-out">
                <FaGithub size={34} />
          </a>
          <a href="https://www.linkedin.com/in/holly-jade-gunning/" target="_blank" className="hover:text-purple-100 hover:-translate-y-1 transition-transform duration-500 ease-in-out">
              <FaLinkedinIn size={34} />
          </a>
          <a href="mailto:holly.jade.gunning@gmail.com" target="_blank" className="hover:text-purple-100 hover:-translate-y-1 transition-transform duration-500 ease-in-out">
              <FaRegEnvelope size={34} />
          </a>
        </div>
        {/* BUTTON SECTION */}
        <div className="mt-8 md:mt-0 lg:mt-4">
          <a href="#contact" className="pr-1">
            <Button 
              title="Get in Touch!"
              icon={<FaRegMessage size={16} />}
              position="left"
            />
          </a>
          <a href="#projects">
            <MagicButton
              title="View Projects"
              icon={<VscGithubProject size={16}/>}
              position="left"
            />
          </a>
        </div>
      </div>{/* LEFT END */}
      {/* RIGHT */}
      <div className="flex flex-col justify-center lg:justify-end items-center md:items-end lg:items-end md:w-1/2 lg:w-1/2 relative">     
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[416px] lg:h-[416px] rounded-full"> 
          <Image 
              className=""
              src="/images/tempUser2.png"
              alt="profile image"
              style={{color: "transparent"}}
              width="450"
              height="450"
              loading="lazy"
          />
          {/* Attribution for the image from Vecteezy - Created By: ibhonkart */}
          <a href="https://www.vecteezy.com/png/35589563-ai-generated-gal-in-modern-manga-fashion-creation-for-your-shirt" target="_blank">
          <span className="absolute bottom-2 right-0 bg-gray-500 text-white text-xs p-1">
              Image by ibhonkart, Vecteezy
          </span>
          </a>
        </div>
      </div>{/* RIGHT END */}



    </div>
    {/* SCROLL DOWN BTN MOTION */}
    <div className="flex flex-row w-full mt-10 mb-14 sm:mt-14 md:mt-40 lg:mt-44 justify-center text-slate-200 animate-[bounce_1.5s_infinite]">
    <PiMouseScrollThin  size={50}  />
    </div>
</section>
  );
};

export default HeroSection;
