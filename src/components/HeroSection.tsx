import React from 'react'
import Image from "next/image";
import { FaRegMessage   } from "react-icons/fa6";
import { VscGithubProject } from "react-icons/vsc";
import MagicButton from './ui/MagicButton';
import Button from './ui/Button';

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
      </h1>
      <p className="mt-2 text-justify">
      With a bachelor&apos;s degree in software development and an insatiable passion for learning, I thrive on exploring cutting-edge technologies and innovative tools. I&apos;m dedicated to continuous growth and excited to bring creative solutions to life.
      </p>
      <div className="mt-8 md:mt-0 lg:mt-4">
        <a href="#contact" className="pr-2">
          <Button 
            title="Get in Touch!"
            icon={<FaRegMessage  size={16}  />}
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
  <div className="col-span-5 md:col-span-6 sm:col-span-12 place-self-center lg:place-self-end mt-6">
      <div className="">
        <Image 
          className=""
          src="/images/tempUser.png"
          alt="profile image"
          style={{color: "transparent"}}
          width="300"
          height="300"
          loading="lazy"
        />
      </div>
  </div>
</section>
  );
};

export default HeroSection;