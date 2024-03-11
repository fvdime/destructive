import React from "react";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <div className="h-screen w-full bg-secondary wrapper">
      <div className="w-full h-full max-w-screen-lg mx-auto p-4 lg:py-2 flex items-center justify-between flex-col text-white">
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
              open source <br />
              and free
            </span>
            <h1>©2024</h1>
          </div>

          <span className="w-2/3 md:w-1/2 text-xs md:text-sm text-center pt-16 flex flex-col items-center justify-between gap-16">
            <Link
              href="/register"
              className="text-base border rounded px-16 py-2 font-semibold w-fit text-black bg-white hover:bg-transparent hover:text-white transition ease duration-500"
            >
              join us
            </Link>
          </span>
        </section>
      </div>
    </div>
  );
}
