"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function About() {

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
    <div className="h-[50vh] w-full overflow-hidden">
      <div className="w-full h-full bg-sky-500" id="section">
        <div ref={slider} className="relative whitespace-nowrap text-9xl">
          <p ref={firstText} className="relative m-0 pr-12">
            destructive to{" "}
          </p>
          <p ref={secondText} className="absolute left-full top-0">
            ourselves demo idk
          </p>
        </div>
      </div>
    </div>
  );
}
