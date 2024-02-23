import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-slate-700">
            Oh No!
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl">
            Something is missing.
          </p>
          <p className="mb-4 text-lg font-light text-zinc-400">
            Sorry, we can&apos;t find that page.
          </p>
          <Link
            href="/"
            className="inline-flex text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded text-sm px-5 py-2.5 text-center my-4 duration-500 ease-in transition-all"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}