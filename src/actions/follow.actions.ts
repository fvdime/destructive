"use server"

import { getToken, getUserIdFromToken } from "@/libs/sign-token";
import { GetUserById } from "./user.action";
import prisma from "@/libs/prisma";

export const addFollow = async ({ userId, path }: { userId: any, path: string }) => {
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

    updatedFollowingIDs.push(userId)

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

    return updatedFollowingIDs
  } catch (error) {
    throw new Error("Failed!")
  }
}

export const removeFollow = async ({ userId, path }: { userId: any, path: string }) => {
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