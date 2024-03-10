"use client";

import { addLike, removeLike } from "@/actions/likes.actions";
import React, { useCallback, useMemo, useState } from "react";
import toast from "react-hot-toast";

export default function LikeButton({
  likedId,
  postId,
}: {
  likedId: string;
  postId: string;
}) {
  const [hasLiked, setHasLiked] = useState<boolean>(false);

  useMemo(() => {
    setHasLiked(likedId.includes(postId));
  }, [likedId, postId]);

  const toggleLike = useCallback(async () => {
    try {
      if (!hasLiked) {
        await addLike(postId);
      } else {
        await removeLike(postId);
      }
      // Toggle hasLiked state after like is added or removed
      setHasLiked((prevHasLiked) => !prevHasLiked);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  }, [hasLiked, postId]);

  return (
    <div className="w-full flex flex-row items-center justify-start gap-2 my-2">
      <div onClick={toggleLike} className="cursor-pointer">
        {hasLiked ? (
          <svg
            className="w-5 h-5 text-red-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 48 48"
          >
            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
          </svg>
        )}
      </div>
      {likedId.length > 0 && (
        <span className="text-xs text-gray-500">
          {likedId.length} {likedId.length === 1 ? "like" : "likes"}
        </span>
      )}
    </div>
  );
}
