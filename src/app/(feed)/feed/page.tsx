import Navbar from '@/components/feed/navbar'
import Post from '@/components/feed/post'
import React from 'react'

export default function FeedPage() {
  return (
    <>
      <Navbar label='Home'/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </>
  )
}
