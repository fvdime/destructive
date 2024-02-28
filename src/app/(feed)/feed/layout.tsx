import PostModal from "@/components/forms/post-form";
import Layout from "@/components/shared/layout";
import React from "react";

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-gray-50 w-full h-full"><Layout>{children}</Layout></div>;
}
