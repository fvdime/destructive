import { getSearchUsers } from '@/actions/user.action';
import Pagination from '@/components/shared/pagination';
import SearchBar from '@/components/shared/search-bar'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function SearchPage({searchParams}: any) {
  const q = searchParams.q || "";
  const page = searchParams.page || 1;

  const { count, users } = await getSearchUsers(q, page)

  return (
    <>
    <SearchBar placeholder="Search"/>
    <div className='py-4 px-8'>
      {users.map((user) => (
        <div key={user.id} className='my-4' >
          <div className='flex flex-row gap-2 items-center'>
          <Link href={`/user/${user.id}`}>
            <Image
              height={36}
              width={36}
              className="w-9 h-9 rounded-full object-cover "
              src={
                user.profilePic
                  ? process.env.NEXT_PUBLIC_AWS_BUCKET_URL +
                    `${user.profilePic}`
                  : "/anonymous.webp"
              }
              alt="profile image"
            />
          </Link>
          <Link href={`/user/${user.id}`} className='font-medium'>
          {user.username}
          </Link>
          </div>
        </div>
        ))}
    </div>
    <Pagination count={count}/>
    </>
  )
}
