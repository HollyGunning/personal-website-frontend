import BgVisualEffect from "@/components/BgVisualEffect";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex justify-center overflow-hidden mx-auto sm:px-10 px-5 min-h-screen bg-black-100">
      < BgVisualEffect /> 
      <div className="max-w-7xl -mt-14 sm:-mt-10 md:-mt-5 lg:mt-0">
        {/* <NavBar/> */}
        
        <HeroSection/>

        {/* <Footer/> */}
        
      </div>
    </main>
  );
}
