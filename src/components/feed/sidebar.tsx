import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const sidebarItems = [
    {
      id: 1,
      label: "Home",
      href: "/feed",
      svg: (
        <svg
          className="w-4 h-4 text-secondary"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
        </svg>
      ),
    },
    {
      id: 2,
      label: "Notifications",
      href: "/feed/notifications",
      svg: (
        <svg
          className="w-5 h-5 text-secondary"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 21"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM4 3 3 2M2 7H1m15-4 1-1m1 5h1M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      label: "Profile",
      href: "/user/1",
      svg: (
        <svg
          className="w-5 h-5 text-secondary"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
      ),
    },
    {
      id: 4,
      label: "Messages",
      href: "/messages",
      svg: (
        <svg
          className="w-4 h-4 text-secondary"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 16"
        >
          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
        </svg>
      ),
    },
    {
      id: 5,
      label: "Search",
      href: "/search",
      svg: (
        <svg
          className="w-4 h-4 text-secondary"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      ),
    },
    {
      id: 6,
      label: "Create",
      href: "/feed/create",
      svg: (
        <svg
          className="w-4 h-4 text-secondary"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      ),
    },
    {
      id: 7,
      label: "Help",
      href: "https://faya-indol.vercel.app",
      svg: (
        <svg
          className="w-5 h-5 text-secondary"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
    },
    {
      id: 8,
      label: "Source",
      href: "https://github.com/fvdime/destructive",
      svg: (
        <svg
          className="w-5 h-5 text-secondary"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
            clip-rule="evenodd"
          />
        </svg>
      ),
    },
    // {
    //   id: 9,
    //   label: "Contact",
    //   href: "https://faya-indol.vercel.app",
    //   svg: (
    //     <h1 className="text-3xl">✵</h1>
    //   ),
    // },
  ];
  
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[16rem]">
          {/* logo */}
          <h1 className="text-lg uppercase font-medium p-4">
            Destructive®
          </h1>
          {sidebarItems.map((item) => (
            <div key={item!.id} className="flex flex-row items-center">
              <Link
                href={item!.href}
                className="flex items-center justify-start gap-6 py-2 px-4 rounded-lg hover:bg-primary hover:bg-primary/30 cursor-pointer w-full transition-all ease-in duration-300"
              >
                {item!.svg}
                <p className="font-medium">{item!.label}</p>
              </Link>
            </div>
          ))}
          <div>
            <button
              type="button"
              className="text-center font-semibold mt-4 lg:block px-4 py-1.5 rounded-lg bg-secondary cursor-pointer shadow hover:shadow-lg transition-all ease-in duration-300 text-white hover:text-gray-100 w-full"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
