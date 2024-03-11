"use server"

import prisma from '@/libs/prisma';
import { z } from 'zod';
import { GetUserById } from "./user.action";
import uploadImage from "@/libs/upload-image";
import { revalidatePath } from 'next/cache'
import { getToken, getUserIdFromToken } from "@/libs/sign-token";;

const messageSchema = z.object({
  message: z.string().min(1),
});

export const SendMessages = async (value: FormDataEntryValue | null, userId: string) => {
  try {
    const validatedFields = messageSchema.safeParse({ message: value });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Like Post.",
    };
  }

  const data = validatedFields.data

    console.log(validatedFields);

    const tokens = getToken()
    console.log("token:::::::::::::::::", tokens)

    const currentUserId = getUserIdFromToken(tokens) as string
    const currentUser = await GetUserById(currentUserId);
    const user = await GetUserById(userId);

    console.log({ user, currentUser })

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

    if (conversation) {
      try {
        const message = await prisma.message.create({
          data: {
            message: data.message,
            senderId: currentUserId,
            receiverId: userId,
            conversationId: conversation.id
          }
        })

        return message
      } catch (error) {

      }
    } else {
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

      try {
        const message = await prisma.message.create({
          data: {
            message: data.message,
            conversationId: newConversation.id,
            senderId: currentUserId,
            receiverId: userId
          }
        })

        console.log(message)

        revalidatePath(`/c/${conversation!.id}`)
        return message
      } catch (error) {
        console.log(error)
        throw new Error("Failed!");
      }
    }
  } catch (error) {
    console.log(error)
    throw new Error("Failed");
  }
};

export const getMessages = async (id: string) => {
  try {
    const messages = await prisma.message.findMany({
      where: { conversationId: id}
    })

    return messages
  } catch (error) {
    console.log(error)
  }
}