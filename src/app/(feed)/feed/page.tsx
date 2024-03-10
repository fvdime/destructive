import Post from "@/components/feed/post";
import React from "react";
import { getPosts } from "@/actions/post.actions";
import { getToken, getUserIdFromToken } from "@/libs/sign-token";

export default async function FeedPage() {
  const posts = await getPosts();

  const token = getToken()
  const userId = getUserIdFromToken(token) as string
  return (
    <>
    {posts.map((post) => (
      <Post key={post.id} post={post} userId={userId}/>
      ))}
    </>
  );
}
