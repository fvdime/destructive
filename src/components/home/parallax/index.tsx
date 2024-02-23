"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform } from "framer-motion";
// eslint-disable-next-line
import styles from "./styles.module.scss";

export default function Index() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // console.log("Scroll Position:", scrollYProgress); // Log scroll position for debugging

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      id: 1,
      src: "meer.mp4",
      scale: scale4,
    },
    {
      id: 2,
      src: "atsushi4.jpg",
      scale: scale5,
    },
    {
      id: 3,
      src: "atsushi3.jpg",
      scale: scale6,
    },
    {
      id: 4,
      src: "atsushi4.jpg",
      scale: scale5,
    },
    {
      id: 5,
      src: "atsushi3.jpg",
      scale: scale6,
    },
    {
      id: 6,
      src: "atsushi4.jpg",
      scale: scale8,
    },
    {
      id: 7,
      src: "atsushi3.jpg",
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.wrapper}>
        {pictures.map(({ src, scale, id }) => {
          return (
            <motion.div
              key={id}
              style={{ scale }}
              className={styles.imageWrapper}
            >
              <div className={styles.imageContainer}>
                {id === 1 ? (
                  <video autoPlay loop muted>
                    <source src={`/${src}`} type="video/mp4"/>
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image src={`/${src}`} fill alt="image" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
