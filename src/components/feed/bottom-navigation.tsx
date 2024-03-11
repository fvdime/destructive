import Link from "next/link";
import React from "react";

export default function BottomNavigation({currentUserId}: { currentUserId: string }) {
  return (
    <div className="w-full flex md:hidden mt-12">
      <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border-t border-gray-200 bottom-0 left-1/2">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
          <Link
          href="/feed"
            className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-100 group transition duration-300 ease"
          >
            <svg
              className="w-5 h-5 mb-1 text-gray-500 group-hover:text-blue-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            <span className="sr-only">Home</span>
          </Link>
          <Link
            href="/feed/notifications"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-100 group transition duration-300 ease"
          >
             <svg
          className="w-6 h-6 text-gray-500 group-hover:text-blue-600"
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
            <span className="sr-only">Notifications</span>
          </Link>
          <div className="flex items-center justify-center">
            <Link
               href="/feed/create"
              className="inline-flex items-center justify-center w-10 h-10 font-medium bg-secondary rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 group transition duration-500 ease"
            >
              <svg
                className="w-5 h-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
              <span className="sr-only">New post</span>
            </Link>
          </div>
          <Link
            href="/feed/s"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-100 group transition duration-300 ease"
          >
            <svg
          className="w-5 h-5 text-gray-500 group-hover:text-blue-600"
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
            <span className="sr-only">Search</span>
          </Link>
          <Link
            href={`/user/${currentUserId}`}
            className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-100 group transition duration-300 ease"
          >
            <svg
              className="w-6 h-6 text-gray-500 group-hover:text-blue-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <span className="sr-only">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
