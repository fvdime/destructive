"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const text = [
  "We are a united, committed and open collective to the community. They represent teamwork, creative and research processes. Destructive is a collective dedicated to the preservation of collective memory that was born in 2014. We are interested in involving, enthusing and training the communities themselves so that they can address the problem of audiovisual preservation of their collective memory. We are a united, committed and open collective to the community. They represent teamwork, creative and research processes. Destructive is a collective dedicated to the preservation of collective memory that was born in 2014. We are interested in involving, enthusing and training the communities themselves so that they can address the problem of audiovisual preservation of their collective memory.",
];

export default function About() {
  return (
    <div className="w-full h-full bg-primary font-IBMPlexSans overflow-hidden">
      <div className="max-w-screen-lg mx-auto px-4 py-8 md:pt-16 flex flex-col justify-center items-center">
        <div className="w-full h-full md:h-[90vh] flex flex-col items-center justify-between gap-4 mb-16 md:mb-0">
          <h1 className="md:text-7xl font-medium uppercase text-6xl">
            from community
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 h-full w-full gap-4">
            <div className="h-full w-full flex items-start">
              <Image
                src="/bg.jpg"
                alt=""
                height={384}
                width={512}
                className="object-cover w-[512px] h-96 rounded"
              />
            </div>
            <div className="h-full w-full flex items-center">
              <Image
                src="/bg.jpg"
                alt=""
                height={384}
                width={512}
                className="object-cover w-[512px] h-96 rounded"
              />
            </div>
            <div className="h-full w-full flex items-end">
              <Image
                src="/bg.jpg"
                alt=""
                height={384}
                width={512}
                className="object-cover w-[512px] h-96 rounded"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full md:h-[90vh] mt-8 flex justify-center">
          <RevealText />
        </div>
      </div>
    </div>
  );
}

export function RevealText() {
  const animation = {
    initial: { y: "100%" },
    enter: (i: any) => ({
      y: "0",
      transition: { duration: 0.9, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i },
    }),
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="">
      {text.map((text, index) => {
        return (
          <div
            key={index}
            className="overflow-hidden w-full h-full flex flex-col items-center justify-center gap-8"
          >
            <motion.h1
              className="text-7xl font-medium uppercase mb-4"
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              About Us
            </motion.h1>
            <motion.p
              className="w-full md:w-1/2 text-sm"
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              {text}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
