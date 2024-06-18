import React from 'react'
import Image from "next/image";
import { FaRegMessage   } from "react-icons/fa6";
import { VscGithubProject } from "react-icons/vsc";
import MagicButton from './ui/MagicButton';
import Button from './ui/Button';

const HeroSection: React.FC = () => {
  return (
<section className="grid grid-cols-1 sm:grid-cols-12 text-white mt-24 px-0 lg:px-12 ">
  {/* LEFT SECTION */}
  <div className="col-span-7 md:col-span-6 sm:col-span-12 place-self-center">
      <h1 className="uppercase text-xs tracking-widest">
        Learning, One Day at a Time
      </h1>
      <h1 className="text-3xl md:text-5xl sm:text-4xl lg:text-6xl lg:leading-normal font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6f23cb] via-[#9382aa] to-[#74aff5]">Hello, I&apos;m Holly
        </span>
      </h1>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam quisquam aspernatur hic cupiditate fugiat optio unde dolore tempore nulla, laboriosam nihil dolorem tempora fugit dignissimos, ut nam, eligendi esse.
      </p>
      <div className="mt-8 lg:mt-4">
        {/* <button className="mr-2 mb-4 lg:mb-0 px-6 py-3 w-full sm:fit md:w-2/5 lg:w-2/5 rounded bg-gradient-to-r from-[#7941bd] via-[#6d35b1] to-[#5a3a82]">
          Get in Touch!
        </button> */}
      

        <a href="#contact" className="pr-2">
          <Button 
            title="Get in Touch!"
            icon={<FaRegMessage    />}
            position="left"
          />
        </a>

        <a href="#projects">
          <MagicButton
            title="View Projects"
            icon={<VscGithubProject  />}
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