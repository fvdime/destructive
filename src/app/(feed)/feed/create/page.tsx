import PostModal from '@/components/forms/post-form'
import React from 'react'
import { getToken, getUserIdFromToken } from "@/libs/sign-token"; 
import { GetUserById } from '@/actions/user.action';

export default async function CreatePage() {
  const token = getToken()
  const userId = getUserIdFromToken(token) as string
  const user = await GetUserById(userId)

  return (
    <>
      <PostModal/>
    </>
  )
}
