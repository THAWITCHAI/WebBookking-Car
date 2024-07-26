import DataEmployees from '@/app/components/admin/DataEmployees'
import Sidebar from '@/Sidebar/Sidebar'
import React from 'react'

type Props = {}

export default function DataEmployeePage({}: Props) {
  return (
    <div className='body'>
        <Sidebar/>
        <DataEmployees/>
    </div>
  )
}