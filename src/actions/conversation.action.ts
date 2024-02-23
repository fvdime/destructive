"use server"

import prisma from '@/libs/prisma';

export const getConversations = async ({ userId, path }: { userId: string, path: string }) => {
  return await prisma.conversation.findMany({
    where: { senderId: userId },
    orderBy: { createdAt: 'desc' }
  })
};

export const getConversation = async ({ userId, id, path }: { userId: string, path: string, id: string }) => {
  return await prisma.conversation.findMany({
    where: { id: id },
  })
};
