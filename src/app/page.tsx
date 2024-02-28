import About from "@/components/home/about";
import Footer from "@/components/home/footer";
import HeroBanner from "@/components/home/hero-banner";
import Parallax from "@/components/home/parallax/index";
import TextSlide from "@/components/home/text-slide";

export default function Home() {
  return (
    <>
      <HeroBanner />
      {/* <Parallax /> */}
      <About/>
      <TextSlide/>
      <Footer />
    </>
  );
}
