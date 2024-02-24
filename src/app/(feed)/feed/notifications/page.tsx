import React from 'react'
import Navbar from '@/components/feed/navbar'

const NotificationsPage = () => {
  return (
    <>
    <Navbar label='Notifications'/>
    <div className="flex flex-col">
      <div className="flex flex-row items-center p-2 gap-4 border-b border-secondary">
        <h1 className="text-5xl">✵⁠⁠</h1>
        <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, omnis aspernatur.
        </p>
      </div>
    </div>
    </>
  )
}

export default NotificationsPage