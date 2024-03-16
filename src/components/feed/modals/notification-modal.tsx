"use client";

import React, { useState, useRef, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { dateFormat } from "@/libs/date";
import { deleteNotification } from "@/actions/notification.action";

export default function NotificationModal({
  notification,
}: {
  notification: any;
}) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  //for exiting when you click anywhere except the white part
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current && onDismiss) {
        onDismiss();
      }
    },
    [onDismiss, overlay]
  );

  const BodyContent = (
    <div className="flex flex-col gap-4">
      <header className="w-full h-full">
        <h1 className="uppercase font-medium">Notifications</h1>
      </header>
      {notification.length > 0 ? (
        <>
          {notification.map((item: any) => (
            <div className="flex flex-col" key={item.id}>
              <div className="flex flex-row items-center justify-between p-2 border-b">
                <div className="flex flex-row items-center gap-2">
                  <h1 className="text-5xl">✵⁠⁠</h1>
                  <p className="text-sm">{item.body}</p>
                </div>
                <button
                  onClick={async() => {
                    await deleteNotification(item.id)
                  }}
                  type="button"
                  className="text-gray-400 bg-transparent hover:text-gray-900 inline-flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <span className="text-sm text-gray-600">No notifications yet</span>
      )}
    </div>
  );

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/80"
      onClick={handleClick}
    >
      <button
        type="button"
        onClick={onDismiss}
        className="absolute top-2 right-8 text-white/80 hover:text-white/20 duration-500 transition-all ease-in"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>

      <div
        ref={wrapper}
        className="flex flex-col absolute h-[95%] w-full bottom-0 bg-white rounded-t-3xl lg:px-40 px-8 py-16 overflow-auto"
      >
        {BodyContent}
      </div>
    </div>
  );
}
