import React from 'react'

const Button = ({
  title, icon, position, handleClick, otherClasses}:{
    title: string; icon: React.ReactNode, position: string; handleClick?: () => void; otherClasses?: string;
}) => {
  return (
    <button 
      onClick={handleClick} 
      className="hover:-translate-y-1 transform transition duration-700 ease-in-out hover:shadow-md hover:bg-[#cdcbff]
      relative inline-flex h-12 w-full sm:full md:w-fit lg:w-1/3 overflow-hidden rounded-lg p-[1px] md:mt-10 mb-4 md:-mb-10 focus:outline-none">
      <span 
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-[#5a3a82] via-[#6d35b1] to-[#7941bd] px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2
          ${otherClasses}`}
        >
          {position === 'left' && icon}
          {title}
          {position === 'right' && icon}
      </span>
    </button>
 )
}

export default Button