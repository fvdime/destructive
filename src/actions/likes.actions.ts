"use server"

import prisma from '@/libs/prisma';
import { getToken, getUserIdFromToken } from '@/libs/sign-token';
import { GetUserById } from './user.action';
import { getSinglePost } from './post.actions';

export const addLike = async ({ postId, path }: { postId: string, path: string }) => {
  try {
    const tokens = getToken()
    console.log("token:::::::::::::::::", tokens)

    const userId = getUserIdFromToken(tokens) as string

    const user = await GetUserById(userId);

    if (!postId || typeof postId !== 'string') {
      throw new Error('Invalid ID');
    }

    const post = await getSinglePost(postId)

    let updatedLikedIDs = [...(post?.likedIds || [])]

    updatedLikedIDs.push(user!.id);

    // NOTIFICATION PART
    try {
      if (post?.userId) {
        await prisma.notification.create({
          data: {
            body: 'Someone liked your post!',
            userId: post.userId
          },
          include: { user: true }
        })

        await prisma.user.update({
          where: {
            id: post.userId
          },
          data: {
            hasNotifications: true
          }
        });
      }
    } catch (error) {
      throw new Error("Failed!")
    }

    return updatedLikedIDs
  } catch (error) {
    throw new Error("Failed to like post!")
  }
}

export const removeLike = async ({ postId, path }: { postId: string, path: string }) => {
  try {
    const tokens = getToken()
    console.log("token:::::::::::::::::", tokens)

    const userId = getUserIdFromToken(tokens) as string

    const user = await GetUserById(userId);

    if (!postId || typeof postId !== 'string') {
      throw new Error('Invalid ID');
    }

    const post = await getSinglePost(postId)

    let updatedLikedIDs = [...(post?.likedIds || [])]

    updatedLikedIDs = updatedLikedIDs.filter((likedId) => likedId !== user!.id)

    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: { likedIds: updatedLikedIDs }
    })
    return { updatedLikedIDs, updatedPost }

  } catch (error) {
    throw new Error("Failed to remove like!")
  }
}