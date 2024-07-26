import Sidebar from '@/Sidebar/Sidebar'
import React from 'react'
import DataCar from '../../components/DataCar'

type Props = {}

export default function DataCarPage({}: Props) {
  return (
    <div className='body'>
        <Sidebar/>
        <DataCar/>
    </div>
  )
}