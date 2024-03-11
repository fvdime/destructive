import { GetUserById } from '@/actions/user.action'
import UpdateProfileModal from '@/components/feed/modals/update-profile-modal'
import UpdateProfileForm from '@/components/forms/update-profile'
import { getToken, getUserIdFromToken } from '@/libs/sign-token'
import React from 'react'

export default async function UpdateProfilePage() {
  const token = getToken()
  const currentUserId = getUserIdFromToken(token) as string
  const currentUser = await GetUserById(currentUserId)

  return (
    <>
      <UpdateProfileModal currentUser={currentUser}/>
    </>
  )
}
