"use server"

import prisma from "@/libs/prisma"
import { z } from 'zod';
import { GetUserById } from "./user.action";
import uploadImage from "@/libs/upload-image";
import { revalidatePath } from 'next/cache'
import { getToken, getUserIdFromToken } from "@/libs/sign-token";;

const postSchema = z.object({
  content: z.string().min(1),
  hashtag: z.string().nullish()
});

export const createPost = async ({ formData, path }: { formData: FormData, path: string }) => {

  try {
    const isValidData = postSchema.parse({
      content: formData.get('content'),
      hashtag: formData.get('hashtag'),
    });

    console.log(isValidData);

    const token = getToken()
    console.log("token:::::::::::::::::", token)

    const userId = getUserIdFromToken(token) as string

    const user = await GetUserById(userId)

    if (!user) return { error: "User not found" };
    // console.log(author)

    if (!user) {
      throw new Error("Failed to get user!");
    }

    const image = formData.get('image') as FormDataEntryValue;
    let filePath = '';

    if (image) {
      const response = await uploadImage({ file: image });
      if (
        response !== null &&
        response.result['$metadata'].httpStatusCode == 200
      )
        filePath = response.filePath;
    }

    const hashtags = isValidData.hashtag?.split(',');

    const post = await prisma.post.create({
      data: {
        image: filePath,
        hashtags: hashtags || [],
        content: isValidData.content,
        userId: user!.id
      },
      include: {
        user: true
      }
    });

    console.log("Created Post!", post);
    revalidatePath(`${path}/${post.id}`)

    return post
  } catch (error) {
    return console.log(error)
  }
}

export const deletePost = async ({ id, path }: { id: any; path: string }) => {
  try {
    await prisma.post.delete({
      where: { id }
    });

    console.log("Deleted post from database");
    revalidatePath(path)
  } catch (error) {
    console.error("Error deleting post:", error);
    throw new Error("Failed to delete post");
  }
};

export const updatePost = async ({ formData, id, path }: { formData: FormData; id: any; path: string }) => {

  try {
    const isValidData = postSchema.parse({
      title: formData.get('title'),
      content: formData.get('content'),
      hashtag: formData.get('hashtag'),
    });

    console.log(isValidData);

    const image = formData.get('image') as FormDataEntryValue;
    let filePath = '';

    if (image) {
      const response = await uploadImage({ file: image });
      if (
        response !== null &&
        response.result['$metadata'].httpStatusCode == 200
      )
        filePath = response.filePath;
    }

    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });

    if (!post) {
      throw new Error('Post not found');
    }

    const hashtags = isValidData.hashtag?.split(',')

    const updatedPost = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        image: filePath,
        hashtags: hashtags || [],
        content: isValidData.content,
      },
    });

    console.log(updatedPost)
    revalidatePath(path)

    return updatedPost
  } catch (error) {
    throw new Error("Failed to fetch delete post!")
  }
}

export const getSinglePost = async (id: any) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        user: true,
        comment: {
          include: { user: true },
          orderBy: { createdAt: 'desc' }
        }
      }
    })
    return post
  } catch (error) {
    throw new Error("Failed to fetch single post!")
  }
}

export const getPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      include: { 
        user: { select: { id: true, username: true, profilePic: true } },
        likes: true
      
      }
    })
    return posts
  } catch (error) {
    throw new Error("Failed to fetch posts!")
  }
}

export const getPublishedPosts = async () => {
  try {
    const publishedPosts = await prisma.post.findMany({
      where: {
        published: true
      }
    })
    return publishedPosts
  } catch (error) {
    throw new Error("Failed to fetch featured posts!")
  }
}