import Addcar from '@/app/components/admin/Addcar'
import Sidebar from '@/Sidebar/Sidebar'
import React from 'react'

type Props = {}

export default function AddCar({}: Props) {
  return (
    <div className='body'>
      <Sidebar/>
      <Addcar/>
    </div>
  )
}