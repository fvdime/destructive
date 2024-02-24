import Navbar from '@/components/feed/navbar'
import Post from '@/components/feed/post'
import UserBio from '@/components/feed/user-bio'
import React from 'react'

export default function UserPage() {
  return (
    <>
      <Navbar label='username'/>
      <UserBio/>
      <Post/>
      <Post/>
      <Post/>
    </>
  )
}
