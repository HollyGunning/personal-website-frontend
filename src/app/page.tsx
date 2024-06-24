import BgVisualEffect from "@/components/BgVisualEffect";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    //<main className="relative overflow-hidden flex justify-center  sm:px-10 px-5 min-h-screen bg-black-100">
    <main className="flex justify-center bg-black-100">
      < BgVisualEffect /> 
      <div className="max-w-7xl mt-10 sm:mt-10 md:mt-0 lg:mt-0">
        {/* <NavBar/> */} 
        <HeroSection/>
        <SkillsSection/>
        {/* <Footer/> */}
      </div>
    </main>
  );
}
