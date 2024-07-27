import Link from 'next/link'
import React from 'react'

type Props = {}

export default function NavbarAddmin({}: Props) {
  return (
    <div className='nav-add rounded-md'>
        <div className="menu"><Link href={'/admin/data/cars/addcar'}>เพิ่มรถ</Link></div>
        <div className="menu"><Link href={'/admin/data/cars/addtypecar'}>เพิ่มประเภทรถ</Link></div>
    </div>
  )
}