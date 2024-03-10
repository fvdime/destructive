"use server"

import prisma from '@/libs/prisma';
import { getToken, getUserIdFromToken } from '@/libs/sign-token';
import { getSinglePost } from './post.actions';
import { revalidatePath } from 'next/cache';

export const likePost = async (postId: string) => {
  try {
    const token = getToken()
    const userId = getUserIdFromToken(token) as string

    if (!postId || typeof postId !== 'string') {
      throw new Error('Invalid ID');
    }

    const post = await getSinglePost(postId)

    const like = await prisma.like.findUnique({
      where: {
        postId_userId: {
          postId,
          userId
        }
      }
    })


    if (like) {
      try {
        await prisma.like.delete({
          where: {
            postId_userId: {
              postId,
              userId
            }
          }
        })

        revalidatePath(`/feed`)
        return { message: "Unliked Post." }
      } catch (error) {
        return { message: "Something went wrong!" }
      }
    }

    try {
      await prisma.like.create({
        data: { postId, userId }
      })

      revalidatePath(`/feed`)

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

      return { message: "Liked Post." }
    } catch (error) {
      return { message: "Something went wrong!" }
    }
  } catch (error) {
    throw new Error("Failed to like post!")
  }
}