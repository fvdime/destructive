import SinglePost from "@/components/feed/single-post";
import CommentForm from "@/components/forms/comment-form";
import Comment from '@/components/feed/comment'
import React from "react";
import Navbar from "@/components/feed/navbar";

export default function PostPage() {
  return (
    <>
      <Navbar label='Post'/>
      <SinglePost />
      <CommentForm/>
      <Comment/>
    </>
  );
}
