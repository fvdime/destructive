"use server"

import prisma from '@/libs/prisma';
import { getToken, getUserIdFromToken } from '@/libs/sign-token';
import { getSinglePost } from './post.actions';
import { revalidatePath } from 'next/cache';

export const bookmarkPost = async (postId: string) => {
  try {
    const token = getToken()
    const userId = getUserIdFromToken(token) as string

    if (!postId || typeof postId !== 'string') {
      throw new Error('Invalid ID');
    }

    const post = await getSinglePost(postId)

    const bookmark = await prisma.bookmark.findUnique({
      where: {
        userId_postId: {
          userId,
          postId
        }
      }
    })

    if (bookmark) {
      try {
        await prisma.bookmark.delete({
          where: {
            userId_postId: {
              postId,
              userId
            }
          }
        })

        revalidatePath(`/feed`)
        return { message: "Unbookmarked Post." }
      } catch (error) {
        return { message: "Something went wrong!" }
      }
    }

    try {
      await prisma.bookmark.create({
        data: { postId, userId }
      })

      revalidatePath(`/feed`)

      // NOTIFICATION PART
      try {
        if (post?.userId) {
          await prisma.notification.create({
            data: {
              body: 'Someone bookmarked your post!',
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

      return { message: "Bookmarked Post." }
    } catch (error) {
      return { message: "Something went wrong!" }
    }
  } catch (error) {
    throw new Error("Failed to like post!")
  }
}