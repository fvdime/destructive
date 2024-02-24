import React from "react";
import Logo from "../shared/logo";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-screen w-full bg-secondary text-gray-50 wrapper">
      <div className="flex flex-col justify-center h-full items-center gap-4 p-4 max-w-screen-lg mx-auto md:px-0">
        <div className="flex w-full h-1/2">
          <div className="flex flex-col justify-center items-center gap-4 w-full">
            <div className="flex flex-col gap-4 h-1/2 w-full items-center justify-center">
              <h1 className="text-2xl font-IBMPlexSans uppercase">
                learn more about destructive
              </h1>
              <Logo />
            </div>
            <div className="flex h-1/2 w-full">
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat et doloremque quo, in velit aliquam doloribus nesciunt
                rem sed libero nobis accusamus? Obcaecati veniam corporis
                veritatis adipisci autem, vitae odit.
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full h-1/2">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
            <div className="flex flex-row h-1/2 md:h-full w-full items-end gap-4">
              <div className="flex flex-row items-center gap-2">
                <h1 className="text-5xl animate-pulse">✵⁠⁠</h1>
                <h1 className="text-sm">© Copyright Destructive 2024</h1>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center h-1/2 md:h-full w-full">
              <div className="w-full h-full flex flex-col justify-end items-start gap-2">
                <h1>Some</h1>
                <Link href="/">destructive</Link>
                <Link href="/">destructive</Link>
                <Link href="/">destructive</Link>
              </div>
              <div className="w-full h-full flex flex-col justify-end items-start gap-2">
                <h1>Some</h1>
                <Link href="/">destructive</Link>
                <Link href="/">destructive</Link>
                <Link href="/">destructive</Link>
              </div>
              <div className="w-full h-full flex flex-col justify-end items-start gap-2">
                <h1>Some</h1>
                <Link href="/">destructive</Link>
                <Link href="/">destructive</Link>
                <Link href="/">destructive</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
