"use client";

import { bookmarkPost } from "@/actions/bookmark.action";
import { Bookmark, Like } from "@prisma/client";
import React, { useOptimistic } from "react";

export default function BookMarkButton({
  userId,
  postId,
  bookmark
}: {
  userId: string,
  postId: string,
  bookmark: any
}) {

  const postBookmark = (bookmark: Bookmark) => bookmark.userId === userId && bookmark.postId === postId

  const [optimisticBookmark, addOptimisticBookmark] = useOptimistic<Bookmark[]>(
    bookmark,
    // @ts-ignore
    (state: Bookmark[], newBookmark: Bookmark) =>
      state.some(postBookmark)
        ? state.filter((like) => like.userId !== userId)
        : [...state, newBookmark]
  );

  return (
    <div className="w-full flex flex-row items-center justify-end gap-2 my-2">
      <button onClick={async () => {
      addOptimisticBookmark({postId, userId}); 
      
      await bookmarkPost(postId)
      }}  className="cursor-pointer">
        {optimisticBookmark.some(postBookmark) ? (
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M 6 2 C 5.861875 2 5.7278809 2.0143848 5.5976562 2.0410156 C 4.686084 2.2274316 4 3.033125 4 4 L 4 22 L 12 19 L 20 22 L 20 4 C 20 3.8625 19.985742 3.7275391 19.958984 3.5976562 C 19.799199 2.8163086 19.183691 2.2008008 18.402344 2.0410156 C 18.272119 2.0143848 18.138125 2 18 2 L 6 2 z" />
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M 6 2 C 4.8444444 2 4 2.9666667 4 4 L 4 22.039062 L 12 19.066406 L 20 22.039062 L 20 20.599609 L 20 4 C 20 3.4777778 19.808671 2.9453899 19.431641 2.5683594 C 19.05461 2.1913289 18.522222 2 18 2 L 6 2 z M 6 4 L 18 4 L 18 19.162109 L 12 16.933594 L 6 19.162109 L 6 4 z" />
          </svg>
        )}
      </button>
    </div>
  );
}
