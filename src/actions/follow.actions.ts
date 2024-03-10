"use server"

import { getToken, getUserIdFromToken } from "@/libs/sign-token";
import { GetUserById } from "./user.action";
import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";

export const followUser = async (userId: string) => {
  try {
    if (!userId) {
      throw new Error('Invalid Id')
    }

    const token = getToken()
    console.log("token:::::::::::::::::", token)
    const currentUserId = getUserIdFromToken(token) as string

    const follow = await prisma.follow.findUnique({
      where: {
        followerId_followingId: {
          followerId: currentUserId,
          followingId: userId
        }
      }
    })

    if (follow) {
      try {
        await prisma.follow.delete({
          where: {
            followerId_followingId: {
              followerId: currentUserId,
              followingId: userId
            }
          }
        })

        revalidatePath(`/user/${userId}`)
        return { message: "Unfollowed User." };
      } catch (error) {
        return {
          message: "Database Error: Failed to Unfollow User.",
        };
      }
    }

    try {
      await prisma.follow.create({
        data: {
          followerId: currentUserId,
          followingId: userId
        }
      })
      revalidatePath(`/user/${userId}`)

      // NOTIFICATION PART
      try {
        await prisma.notification.create({
          data: {
            body: "Someone followed you!",
            userId
          }
        })

        await prisma.user.update({
          where: { id: userId },
          data: { hasNotifications: true }
        })
      } catch (error) {
        throw new Error("Failed to follow!")
      }

      return { message: "Followed User." };
    } catch (error) {
      return {
        message: "Database Error: Failed to Follow User.",
      };
    }
  } catch (error) {
    throw new Error("Failed!")
  }
}

export const unFollowUser = async ({ userId, path }: { userId: any, path: string }) => {
  try {
    if (!userId) {
      throw new Error('Invalid Id')
    }

    const tokens = getToken()
    console.log("token:::::::::::::::::", tokens)
    const currentUserId = getUserIdFromToken(tokens) as string

    const currentUser = await GetUserById(currentUserId);
    const user = await GetUserById(userId)

    console.log(user, currentUser)

    let updatedFollowingIDs = [...(user?.followingIds || [])]

    updatedFollowingIDs = updatedFollowingIDs.filter((followingId) => followingId !== userId);

    // NOTIFICATION PART
    const updatedUser = await prisma.user.update({
      where: {
        id: currentUserId
      },
      data: { followingIds: updatedFollowingIDs }
    })

    return ({ updatedFollowingIDs, updatedUser })
  } catch (error) {
    throw new Error("Failed!")
  }
}