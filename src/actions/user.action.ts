"use server"

import prisma from '@/libs/prisma';

export const GetUserById = async (userId: string) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

export const GetUsers = async () => {
  return await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    take: 9
  })
}

export const GetUserProfile = async(userId: string) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { id: userId},
      include: { post: true, followedBy: true, following: true }
    })

    return ({ ...existingUser });
  } catch (error) {
    throw new Error("Failed to fetch user")
  }
}