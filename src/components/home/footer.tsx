import React from "react";
import Logo from "../shared/logo";
import Link from "next/link";

export default function Footer() {
  const footerItems = [
    {
      id: 1,
      label: "site map",
      links: [
        {name: "Destructive", href: "/"},
        {name: "Auth", href: "/register"},
        {name: "About", href: "/about"}
      ]
    },
    {
      id: 2,
      label: "sources",
      links: [
        {name: "Source", href: "https://github.com/fvdime/destructive"},
        {name: "Contact", href: "https://faya-indol.vercel.app"},
        {name: "Work with me", href: "https://faya-indol.vercel.app/"}
      ]
    },
    ,
    {
      id: 3,
      label: "Legal",
      links: [
        {name: "Privacy Policy", href: "/"},
        {name: "Licensing", href: "/"},
        {name: "Terms & Conditions", href: "/"}
      ]
    },
  ]

  return (
    <div className="h-screen w-full bg-secondary text-gray-50 wrapper">
      <div className="flex flex-col justify-center h-full items-center gap-4 p-4 max-w-screen-lg mx-auto md:px-0">
        <div className="flex w-full h-2/3">
          <div className="flex flex-col gap-8 h-full w-full items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-IBMPlexSans uppercase">
              interested in
            </h1>
            <h1 className="font-semibold text-5xl md:text-8xl italic font-CormorantGaramond uppercase">
              destructive?
            </h1>
            <h1 className="text-3xl md:text-5xl font-IBMPlexSans uppercase">
              join us!
            </h1>
          </div>
        </div>
        <div className="flex w-full h-full md:h-1/3">
          <div className="flex flex-col md:flex-row justify-around items-center gap-4 w-full">
              <Link href="/" className="text-lg uppercase font-medium">Destructive®
              </Link>
            <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3">
              {footerItems.map((item) => (
              <div key={item!.id} className="text-start">
                <h2 className="mb-4 text-sm font-semibold uppercase underline">{item!.label}</h2>
                <ul className="text-gray-300 font-medium text-sm">
                  {item!.links.map((link, i) => (
                    <li key={i} className="mb-4">
                      <Link href={link.href} className="hover:underline hover:text-gray-400">
                      ⁠✜⁠ {link.name}
                      </Link>
                    </li>  
                    ))}
                    </ul>
              </div>
              ))}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
