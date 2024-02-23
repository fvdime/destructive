import React from "react";
import Parallax from '@/components/home/parallax/index'

export default function HeroBanner() {
  return (
    <div className="h-full w-full bg-primary">
      <div className="max-w-screen-lg mx-auto md:p-0 h-full flex flex-col justify-between items-center gap-4">
        <header className="w-full h-[8vh] flex flex-row justify-between items-center pb-4 md:py-">
          <h1>logo</h1>
          <button>Get Started</button>
        </header>
        <section className="w-full h-full flex flex-col items-center justify-start mx-auto gap-8 my-8">
          <h1 className=" font-CormorantGaramond md:text-6xl text-center flex-wrap font-light text-4xl md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <span className="w-2/3 md:w-1/2 text-sm md:text-base">
            Illum sint quos numquam recusandae vel magnam laborum architecto
            soluta repellat aperiam repellendus porro
          </span>
        </section>
      </div>
    </div>
  );
}
