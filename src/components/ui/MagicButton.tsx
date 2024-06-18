import React from 'react'

const MagicButton = ({
  title, icon, position, handleClick, otherClasses}:{
    title: string; icon: React.ReactNode, position: string; handleClick?: () => void; otherClasses?: string;
}) => {
  return (
    <button className="relative inline-flex h-12 w-full sm:2/5 md:w-fit lg:w-1/3 overflow-hidden rounded-lg p-[1px] focus:outline-none  md:mt-10">
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#cdcbff_0%,#725bab_50%,#cdcbff_100%)]" />

      <span className={`hover:animate-pulse hover:bg-[linear-gradient(110deg,#00000,45%,#6a0f91,55%,#a80200)] bg-[length:200%_100%]
        inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  )
}

export default MagicButton