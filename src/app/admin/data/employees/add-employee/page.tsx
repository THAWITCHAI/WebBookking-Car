import AddEmployee from '@/app/components/admin/AddEmployee'
import Sidebar from '@/Sidebar/Sidebar'
import React from 'react'

type Props = {}

export default function AddEmployeePage({}: Props) {
  return (
    <div className='body'>
        <Sidebar/>
        <AddEmployee/>
    </div>
  )
}