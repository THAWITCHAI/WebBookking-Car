import DataUsers from '@/app/components/admin/DataUsers'
import Sidebar from '@/Sidebar/Sidebar'
import React from 'react'

type Props = {}

export default function DataUsersPage({}: Props) {
  return (
    <div className='body'>
        <Sidebar/>
        <DataUsers/>
    </div>
  )
}