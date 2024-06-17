import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10">
      <div className="flex flex-col items-center">
        <h1>FOOTER CONTENT HERE</h1>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024</p>
      </div>
    </footer>
  )
}

export default Footer