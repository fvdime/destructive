import About from "@/components/home/about";
import Footer from "@/components/home/footer";
import HeroBanner from "@/components/home/hero-banner";
import Parallax from "@/components/home/parallax/index";

// Inspired from https://www.cinecasero.uy/ pls checkout!!!!
export default function Home() {
  return (
    <>
      <HeroBanner />
      <Parallax />
      <div className="h-screen bg-red-400"></div>
      <About/>
      <Footer />
    </>
  );
}
