"use server"

import prisma from "@/libs/prisma"
import { z } from 'zod';
import { GetUserById } from "./user.action";
import uploadImage from "@/libs/upload-image";
import { revalidatePath } from 'next/cache'
import { getToken, getUserIdFromToken } from "@/libs/sign-token";;

const commentSchema = z.object({
  comment: z.string().min(1),
});

export const createComment = async ({ formData, path, postId }: { formData: FormData; path: string, postId: string }) => {

  try {
    const isValidData = commentSchema.parse({
      comment: formData.get('comment'),
    });

    console.log(isValidData);

    const tokens = getToken()
    console.log("token:::::::::::::::::", tokens)

    const userId = getUserIdFromToken(tokens) as string

    const user = await GetUserById(userId);
    // console.log(author)

    if (!user) {
      throw new Error("Failed to get comment!");
    }

    const comment = await prisma.comment.create({
      data: {
        comment: isValidData.comment,
        postId: postId,
        userId: user!.id
      },
      include: {
        user: true
      }
    });

    console.log("Created comment!", comment);

    // NOTIFICATION PART
    try {
      const post = await prisma.post.findUnique({
        where: { id: postId }
      })

      if (post?.userId) {
        await prisma.notification.create({
          data: {
            body: 'Someone replied on your post!',
            userId: post.userId
          }
        });

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
      throw new Error("Failed to create notification!");
    }
    
    revalidatePath(path)

    return comment
  } catch (error) {
    return console.log(error)
  }
}

export const deleteComment = async ({ id, path }: { id: any; path: string }) => {
  try {
    await prisma.comment.delete({
      where: { id }
    });

    console.log("Deleted comment from database");
    revalidatePath(path)
  } catch (error) {
    console.error("Error deleting comment:", error);
    throw new Error("Failed to delete comment");
  }
};

export const updateComment = async ({ formData, postId, path }: { formData: FormData; postId: any; path: string }) => {

  try {
    const isValidData = commentSchema.parse({
      comment: formData.get('comment'),
    });

    console.log(isValidData);

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      throw new Error('comment not found');
    }

    const updatedComment = await prisma.comment.update({
      where: {
        id: postId,
      },
      data: {
        comment: isValidData.comment,
      },
    });

    console.log(updatedComment)
    revalidatePath(path)

    return updatedComment
  } catch (error) {
    throw new Error("Failed to fetch delete post!")
  }
}

export const getComments = async () => {
  try {
    const comments = await prisma.comment.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return comments
  } catch (error) {
    throw new Error("Failed to fetch comments!")
  }
}