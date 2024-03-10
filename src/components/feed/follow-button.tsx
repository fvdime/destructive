import { followUser } from "@/actions/follow.actions";
import React from "react";
import Button from "../shared/button";

export default function FollowButton({
  userId,
  isFollowing,
}: {
  userId: string;
  isFollowing?: boolean;
}) {
  const handleClick = async () => {
    await followUser(userId);
  };

  return (
    <Button
      onClick={handleClick}
      label={isFollowing ? "Unfollow" : "Follow"}
      fullWidth
    />
  );
}
