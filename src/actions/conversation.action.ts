"use server"

import prisma from '@/libs/prisma';
import { getToken, getUserIdFromToken } from '@/libs/sign-token';
import { GetUserById } from './user.action';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const conversationSchema = z.object({
  userId: z.string(),
});


export const getConversations = async (userId: string) => {
  return await prisma.conversation.findMany({
    where: { senderId: userId },
    orderBy: { createdAt: 'desc' },
    include: {
      users: {
        select: {
          id: true,
          username: true,
          profilePic: true
        }
      }
    }
  })
};

export const getConversation = async (id: string) => {
  return await prisma.conversation.findMany({
    where: { receiverId: id },
  })
};


export const createConversation = async (value: FormDataEntryValue | null) => {
  const validatedFields = conversationSchema.safeParse({ userId: value });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Like Post.",
    };
  }

  const { userId } = validatedFields.data;

  const token = getToken()
  console.log("token:::::::::::::::::", token)

  const currentUserId = getUserIdFromToken(token) as string

  const conversation = await prisma.conversation.findFirst({
    where: {
      AND: [
        {
          users: {
            some: {
              id: currentUserId
            }
          },
        },
        {
          users: {
            some: {
              id: userId
            }
          }
        }
      ]
    }
  })

  if (!conversation) {
    const newConversation = await prisma.conversation.create({
      data: {
        senderId: currentUserId,
        receiverId: userId,
        users: {
          connect: [
            { id: currentUserId },
            { id: userId }
          ]
        },
        seen: false
      }
    })

    console.log(newConversation)
    redirect(`/c/${newConversation.id}`)
  } else {
    console.log("CONVOOOO")
    console.log(conversation)
    redirect(`/c/${conversation.id}`)
  }
}