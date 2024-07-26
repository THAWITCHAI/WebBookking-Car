import ListCar from '@/app/components/client/ListCar'
import SidebarUser from '@/Sidebar/SidebarUser'
import React from 'react'

type Props = {}

export default function ListCarPage({}: Props) {
  return (
    <div className='body'>
        <SidebarUser/>
        <ListCar/>
    </div>
  )
}