import React from 'react'
import SkillsTile from './ui/SkillsTile';
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiVuedotjs } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiFirebaseFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";


const SkillsSection = () => {
  
  return (
    <section id="skills" className="border-b border-t border-neutral-800 pb-32
    mt-10 sm:mt-14 md:mt-20 lg:mt-32 mb-40 px-2 text-white">
      <h1 id="technologies-heading" className="my-8 sm:my-8 md:my-14 lg:my-16 text-center text-4xl sm:text-5xl md:text-4xl lg:text-5xl lg:leading-normal font-semibold">Technologies</h1>
      <div className=" flex flex-wrap items-center justify-center gap-6 ">
        <div>
          <SkillsTile tooltip="JavaScript" icon={<TbBrandJavascript className="text-yellow-400" />} />
        </div>
        <div>
          <SkillsTile tooltip="React" icon={<FaReact className="text-cyan-400" />} />
        </div>
        <div>
          <SkillsTile tooltip="Tailwind" icon={<RiTailwindCssFill className="text-teal-500" />} />
        </div>
        <div>
          <SkillsTile tooltip="Vue" icon={<SiVuedotjs className="text-[#41B883]" />} />
        </div>
        <div>
          <SkillsTile tooltip="C++" icon={<SiCplusplus className="text-[#3c7dc2]" />} />
        </div>
        <div>
          <SkillsTile tooltip="Git" icon={<FaGitAlt className="text-orange-600" />} />
        </div>
        <div>
          <SkillsTile tooltip="Firebase" icon={<RiFirebaseFill className="text-yellow-400" />} />
        </div>

      </div>
    </section>
  )
}

export default SkillsSection