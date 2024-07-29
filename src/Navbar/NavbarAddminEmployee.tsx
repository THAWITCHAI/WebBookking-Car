import Link from 'next/link'
import React from 'react'

type Props = {}

export default function NavbarAddminEmployee({}: Props) {
  return (
    <div className='nav-add rounded-md'>
        <div className="menu"><Link href={'/admin/data/employees/add-employee'}>เพิ่มข้อมูลพนังงาน</Link></div>
        <div className="menu"><Link href={'/admin/data/employees/add-type'}>เพิ่มบทบาท</Link></div>
    </div>
  )
}