import Navabar from '@/Navbar/Navabar'
import SidebarUser from '@/Sidebar/SidebarUser'
import React from 'react'

type Props = {}

export default function HomePage({}: Props) {
  return (
    <div className='body'>
      <SidebarUser/>
      <div className='w-4/5 h-full'><h1 className='text-center'>Welcome to Website Booking Car</h1></div>
    </div>
  )
}