import PostModal from "@/components/forms/post-form";
import Layout from "@/components/shared/layout";
import React from "react";

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div><Layout>{children}</Layout></div>;
}
