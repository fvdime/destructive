import SinglePost from "@/components/feed/single-post";
import CommentForm from "@/components/forms/comment-form";
import Comment from '@/components/feed/comment'
import React from "react";
import Navbar from "@/components/feed/navbar";
import PostModal from "@/components/feed/modals/post-modal";

export default function PostPage() {
  return (
    <>
      {/* <SinglePost />
      <CommentForm/>
      <Comment/> */}
      <PostModal/>
    </>
  );
}
