"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroBanner() {
  const [windowsWidth, setWindowsWidth] = useState(0);

  useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, []);

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
    const indices = [];
    for (let i = 0; i < nbOfBlocks; i++) {
      indices.push(i);
    }
    return indices.map((index) => {
      return (
        <div
          onMouseEnter={(e) => {
            colorize(e.target);
          }}
          key={index}
        ></div>
      );
    });
  };

  const colorize = (el: any) => {
    el.style.backgroundColor = "white";
    setTimeout(() => {
      el.style.backgroundColor = "transparent";
    }, 300);
  };

  return (
    <div className="banner-container">
      <div className="banner-body max-w-screen-lg mx-auto p-4 lg:py-2 flex items-center justify-between flex-col text-white pointer-events-none">
        <header className="w-full flex flex-row justify-between items-center border-b pb-2">
          <h1 className="uppercase font-medium">Destructive®</h1>
          <Link
            href="/register"
            className="pointer-events-auto hover:underline"
          >
            Join Us
          </Link>
        </header>
        <section className="w-full h-full flex flex-col items-center justify-center mx-auto gap-2 my-8 md:text-6xl text-center flex-wrap text-4xl  uppercase font-IBMPlexSans">
          <div className="w-full flex flex-row justify-center md:justify-start items-end gap-4">
            <h1>we are</h1>
            <span className="text-xs hidden md:flex">
              an independent <br />
              creative
            </span>
          </div>
          <h1 className="font-semibold text-5xl md:text-8xl italic font-CormorantGaramond">
            destructive
          </h1>
          <div className="w-full flex flex-row justify-center md:justify-end items-end gap-4">
            <span className="text-xs hidden md:flex">
              free <br />
              and bla bla
            </span>
            <h1>⁠✜ studio ⁠✜</h1>
          </div>
          <h1>©2024</h1>

          <span className="w-2/3 md:w-1/2 text-xs md:text-sm text-center pt-16">
            Illum sint quos numquam recusandae vel magnam laborum architecto
            soluta repellat aperiam repellendus porro
          </span>
          <h1 className="animate-bounce text-xs underline pt-4">
            ⁠✜ Scroll Down ⁠✜
          </h1>
        </section>
      </div>
      <div className="banner-grid">
        {windowsWidth > 0 &&
          Array.from(Array(20).keys()).map((_, index) => {
            return (
              <div key={index} className="banner-column">
                {getBlocks()}
              </div>
            );
          })}
      </div>
    </div>
  );
}
