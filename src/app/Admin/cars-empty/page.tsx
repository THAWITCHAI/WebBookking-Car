import Sidebar from '@/Sidebar/Sidebar'
import React from 'react'
import CarEmpty from '../../components/admin/CarsEmpty'

type Props = {}

export default function CarsEmptyPage({}: Props) {
  return (
    <div className='body'>
        <Sidebar/>
        <CarEmpty/>
    </div>
  )
}