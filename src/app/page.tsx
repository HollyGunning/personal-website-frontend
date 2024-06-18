import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";


export default function Home() {
  return (
    <main className="relative flex justify-center overflow-hidden mx-auto sm:px-10 px-5 min-h-screen lg:min-h-[75vh] bg-black-100">
      
      <div className="max-w-7xl">
        {/* <NavBar/> */}
      
        <HeroSection/>

        {/* <Footer/> */}
      </div>
    </main>
  );
}
