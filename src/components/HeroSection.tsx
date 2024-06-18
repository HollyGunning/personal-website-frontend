"use client";
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import MagicButton from './ui/MagicButton';
import Button from './ui/Button';
import { FaRegMessage, FaLinkedinIn } from "react-icons/fa6";
import { VscGithubProject } from "react-icons/vsc";
import { FaGithub, FaRegEnvelope  } from "react-icons/fa";


const HeroSection: React.FC = () => {
  return (
<section className="grid grid-cols-1 sm:grid-cols-12 text-white mt-24 px-1 sm:px-2 md:px-6 lg:px-12 ">
  {/* LEFT SECTION */}
  <div className="col-span-7 md:col-span-6 sm:col-span-12 place-self-center text-center md:text-start lg:text-start">
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
      <p className="mt-2 text-justify">
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
        <a href="#contact" className="pr-2">
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

  </div>
  
  {/* Right Side */}
  <div className="col-span-5 md:col-span-6 sm:col-span-12 place-self-center lg:place-self-end mt-6 relative">
    <div className="relative">
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
        <a href="https://www.vecteezy.com/png/35589563-ai-generated-gal-in-modern-manga-fashion-creation-for-your-shirt">
        <span className="absolute bottom-0 right-0 bg-gray-500 text-white text-xs p-1">
            Image by ibhonkart, Vecteezy
        </span>
        </a>
    </div>
</div>


  
</section>
  );
};

export default HeroSection;