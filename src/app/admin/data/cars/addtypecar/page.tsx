import AddTypeCar from '@/app/components/admin/AddTypeCar'
import Sidebar from '@/Sidebar/Sidebar'
import React from 'react'

type Props = {}

export default function AddTypeCarPage({}: Props) {
  return (
    <div className='body'>
      <Sidebar/>
      <AddTypeCar/>
    </div>
  )
}