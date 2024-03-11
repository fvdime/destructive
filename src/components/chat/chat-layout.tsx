import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChatLayoutComponent = async ({
  children,
  currentUser,
}: {
  children: React.ReactNode;
  currentUser: any;
}) => {

  
  return (
    <>
      <div className="relative min-h-screen md:flex">
        <input type="checkbox" id="menu-open" className="hidden" />
        <label
          htmlFor="menu-open"
          className="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>

        <header className="bg-gray-100 flex justify-between md:hidden border-b border-zinc-300 fixed top-0 left-0 w-full">
          <a
            href="#"
            className="block p-4  font-bold whitespace-nowrap truncate"
          >
            username
          </a>

          <label
            htmlFor="menu-open"
            id="mobile-menu-button"
            className="m-2 p-2 focus:outline-none hover:text-gray-600 hover:bg-gray-200 rounded-md"
          >
            <svg
              id="menu-open-icon"
              className="h-6 w-6 transition duration-500 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              id="menu-close-icon"
              className="h-6 w-6 transition duration-500 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
        </header>

        <aside
          id="sidebar"
          className="bg-gray-100 border-r border-zinc-300 md:w-80 z-10 h-screen
          w-3/5 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out flex flex-col justify-between overflow-y-auto"
        >
          <div className="flex flex-col space-y-4">
            <Link
              href="/feed"
              className="text-lg uppercase font-medium px-4 truncate"
            >
              ↞ Destructive®
            </Link>

            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center px-4">
                <Link
                  href="/"
                  className="flex items-center justify-start gap-6 py-2 px-1 rounded-lg  hover:bg-primary/30 cursor-pointer w-full transition-all ease-in duration-300"
                >
                  {/* href={`/user/${item.user.id}`} */}
                  <Image
                    height={32}
                    width={32}
                    className="w-8 h-8 rounded-full object-cover"
                    src="/a.jpg"
                    // src={
                    //   item.user.profilePic
                    //     ? process.env.NEXT_PUBLIC_AWS_BUCKET_URL +
                    //       `${item.user.profilePic}`
                    //     : "/anonymous.webp"
                    // }
                    alt="profile image"
                  />
                  <p className="font-medium">sddd</p>
                </Link>
              </div>
            </div>
          </div>

          <nav className="flex flex-row items-center px-4 border-t border-zinc-300">
            <div className="flex items-center justify-start gap-6 py-4 rounded-lg px-1 cursor-pointer w-full transition-all ease-in duration-300">
              <Image
                height={32}
                width={32}
                className="w-8 h-8 rounded-full object-cover"
                src="/a.jpg"
                src={
                  currentUser.profilePic
                    ? process.env.NEXT_PUBLIC_AWS_BUCKET_URL +
                      `${currentUser.profilePic}`
                    : "/anonymous.webp"
                }
                alt="profile image"
              />
              <p className="font-medium">{currentUser.username}</p>
            </div>
          </nav>
        </aside>

        <main id="content" className="flex-1 p-6 lg:p-0">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </>
  );
};

export default ChatLayoutComponent;
