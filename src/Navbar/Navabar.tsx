import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Navabar({}: Props) {
  return (
    <div className='navbar'>
      <div className='Link'><Link href={''}>รถมอเตอร์ไซต์</Link></div>
      <div className='Link'><Link href={''}>รถเก๋ง</Link></div>
      <div className='Link'><Link href={''}>รถตู้</Link></div>
      <div className='Link'><Link href={''}>รถบิ๊กไบค์</Link></div>
      <div className='Link'><Link href={''}>รถกระบะ</Link></div>
    </div>
  )
}