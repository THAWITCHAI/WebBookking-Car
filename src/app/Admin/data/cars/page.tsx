import DataCar from '@/app/components/admin/DataCar'
import Sidebar from '@/Sidebar/Sidebar'
import React from 'react'

type Props = {}

export default function DataCarPage({}: Props) {
  return (
    <div className='body'>
        <Sidebar/>
        <DataCar/>
    </div>
  )
}