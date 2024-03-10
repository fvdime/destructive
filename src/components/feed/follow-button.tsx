import { followUser } from "@/actions/follow.actions";
import React from "react";
import Button from "../shared/button";

export default function FollowButton({
  userId,
  isFollowing,
  isOwn
}: {
  userId: string;
  isFollowing?: boolean;
  isOwn: boolean
}) {
  const handleClick = async () => {
    await followUser(userId);
  };

  return (
    <Button
      onClick={handleClick}
      label={isOwn ? "Share" : (isFollowing ? "Unfollow" : "Follow")}
      fullWidth
    />
  );
}
