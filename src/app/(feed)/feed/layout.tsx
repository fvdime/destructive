import PostModal from "@/components/forms/post-form";
import Layout from "@/components/shared/layout";
import { getToken, getUserIdFromToken } from "@/libs/sign-token";
import React from "react";

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = getToken()
  const currentUserId = getUserIdFromToken(token) as string

  return <div className="bg-gray-50 w-full h-full"><Layout currentUserId={currentUserId}>{children}</Layout></div>;
}
