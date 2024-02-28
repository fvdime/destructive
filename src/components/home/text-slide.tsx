"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function TextSlide() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });

    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <div className="h-24 md:h-32 w-full overflow-hidden relative flex flex-col justify-between items-start bg-primary">
      <div className="inline-block w-[200%] h-24 md:h-28 absolute overflow-hidden marquee text-5xl md:text-6xl lg:text-8xl font-medium uppercase pt-6 md:pt-8 lg:pt-4">
        <h1 className="float-left w-1/2 md:w-1/3">destructive ✵</h1>
        <h1 className="float-left  w-1/2 md:w-1/3">destructive ✵</h1>
        <h1 className="float-left w-1/3 md:flex hidden">destructive ✵</h1>
      </div>
    </div>
  );
}
