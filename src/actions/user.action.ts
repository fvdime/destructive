"use server"

import prisma from '@/libs/prisma';

export const GetUserById = async (userId: string) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};