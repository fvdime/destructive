import Post from "@/components/feed/post";
import React from "react";
import { getPosts } from "@/actions/post.actions";

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
    {posts.map((post) => (
      <Post key={post.id} post={post}/>
      ))}
    </>
  );
}
