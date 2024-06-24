import React from 'react'

const SkillsTile = ({
  tooltip, icon}:{ tooltip:string; icon: React.ReactNode;
}) => {
  return (
    <div className="relative rounded-2xl border-2 border-purple-100 bg-black bg-opacity-30 p-4 cursor-pointer group hover:animate-[pulse2_2s_ease-in-out_infinite]" role="button" tabIndex={0} aria-label={tooltip}>
      <span className="font-bold text-6xl lg:text-7xl" >
        {icon}
      </span>
    <div className="absolute top-[-55px] left-1/2 transform -translate-x-1/2 bg-purple-200 py-2 px-4 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
      <p className="font-medium text-lg">{tooltip}</p>
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-[5px] border-transparent border-t-purple-200"></div>
    </div>
  </div>
  )
}

export default SkillsTile