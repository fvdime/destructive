"use server"

import prisma from '@/libs/prisma'
import { revalidatePath } from 'next/cache'

export const getNotifications = async (userId: string) => {
  try {
    if (!userId) {
      throw new Error('Invalid Id')
    }

    const notifications = await prisma.notification.findMany({
      where: { userId: userId },
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

export const deleteNotification = async (notificationId: string) => {
  await prisma.notification.delete({
    where: { id: notificationId }
  })

  console.log("Deleted")
  revalidatePath("/feed/notifications")
}