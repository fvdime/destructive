import React from 'react'
import Sidebar from '../feed/sidebar'
import Navbar from '../feed/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Navbar/>
    <div className="max-w-screen-lg mx-auto">
      <div className="w-full flex flex-row justify-between lg:gap-4 pt-4 h-full">
      <div className="hidden w-1/5 h-full lg:flex lg:flex-col gap-4">
          <Sidebar/>
        </div>
        <div className="h-full w-full px-4 flex flex-col gap-4 overflow-y-auto rounded-lg">
          {children}
        </div>
        <div className="hidden w-1/5 h-full lg:flex lg:flex-col gap-4">
          bbbbbbbbbbbbbbbb
        </div>
      </div>
    </div>
  </>
  )
}
