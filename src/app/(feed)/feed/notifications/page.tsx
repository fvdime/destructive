import React from 'react'
import Navbar from '@/components/feed/navbar'
import NotificationModal from '@/components/feed/modals/notification-modal'
import { getToken, getUserIdFromToken } from '@/libs/sign-token';
import { getNotifications } from '@/actions/notification.action';

const NotificationsPage = async () => {
  const token = getToken();
  const userId = getUserIdFromToken(token) as string;
  console.log(userId)

  const notification = await getNotifications(userId)

  return (
    <>
    <NotificationModal notification={notification}/>
    </>
  )
}

export default NotificationsPage