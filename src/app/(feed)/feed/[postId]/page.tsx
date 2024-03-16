import React from "react";
import Navbar from "@/components/feed/navbar";
import PostModal from "@/components/feed/modals/post-modal";
import { getSinglePost } from "@/actions/post.actions";
import { getToken, getUserIdFromToken } from "@/libs/sign-token";
import { getComments } from "@/actions/comment.action";

export default async function PostPage({ params }: any) {
  const id = params.postId;
  const post = await getSinglePost(id);

  const token = getToken();
  const userTID = getUserIdFromToken(token) as string;
  const userId = post?.user.id
  const isOwn = userId == userTID;

  const comment = await getComments(id);

  return (
    <>
      <PostModal post={post} isOwn={isOwn} comment={comment} userTID={userTID}/>
    </>
  );
}
