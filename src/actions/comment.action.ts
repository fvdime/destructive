"use server"

import prisma from "@/libs/prisma"
import { z } from 'zod';
import { GetUserById } from "./user.action";
import { revalidatePath } from 'next/cache'
import { getToken, getUserIdFromToken } from "@/libs/sign-token";;

const commentSchema = z.object({
  comment: z.string()
});

export const createComment = async (values: z.infer<typeof commentSchema>, postId: string) => {
  try {
    const isValidData = commentSchema.safeParse(values);

    console.log(isValidData);

    if (!isValidData.success) {
      return {
        errors: isValidData.error.flatten().fieldErrors,
        message: "Missing Fields! Failed to create comment."
      }
    }

    const data = isValidData.data

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
        comment: data.comment,
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
      return { message: "Failed to create notification." };
    }

    revalidatePath(`/feed/${postId}`)

    return { message: "Created Comment." }
  } catch (error) {
    return { message: "Failed to create comment." };
  }
}

export async function createCommentAction(
  postId: string,
  prevState: any,
  formData: FormData
) {
  try {
    const isValidData = commentSchema.parse({
      comment: formData.get('comment'),
    });

    const token = getToken()
    const userId = getUserIdFromToken(token) as string

    if (!userId) return { errorMessage: 'User not found!' }

    if (!isValidData.comment) return { errorMessage: 'Please write some comment!' }

    await prisma.comment.create({
      data: {
        comment: isValidData.comment,
        postId: postId,
        userId: userId,
      },
      include: {
        user: true
      }
    });

    revalidatePath(`/feed/${postId}`)

  } catch (err) {
    if (err instanceof Error && err.name == 'ZodError') {
      const errors = {
        errorMessage: '',
      };

      [...JSON.parse(err.message)].forEach((item) => {
        if (item?.path[0] == 'email') {
          errors.errorMessage = item?.message || '';
        }
      });

      return errors;
    }

    return {
      errorMessage: '',
    };
  }
}

export const deleteComment = async ({ commentId, path }: { commentId: string; path: string }) => {
  await prisma.comment.delete({
    where: { id: commentId }
  });

  console.log("Deleted comment from database");
  revalidatePath(path)
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

export const getComments = async (postId: any) => {
  try {
    const comments = await prisma.comment.findMany({
      where: { postId: postId },
      orderBy: {
        createdAt: 'desc'
      },
      include: { user: true }
    })
    return comments
  } catch (error) {
    throw new Error("Failed to fetch comments!")
  }
}