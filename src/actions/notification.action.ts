"use server"

import prisma from '@/libs/prisma'
import { revalidatePath } from 'next/cache'

export const getNotifications = async ({ userId, path }: { userId: any, path: string }) => {
  try {
    if (!userId) {
      throw new Error('Invalid Id')
    }

    const notifications = await prisma.notification.findMany({
      where: { id: userId },
      orderBy: { createdAt: 'desc' }
    })

    await prisma.user.update({
      where: { id: userId },
      data: { hasNotifications: false }
    })

    // revalidatePath(path)

    return notifications
  } catch (error) {
    throw new Error("Failed!")
  }
}