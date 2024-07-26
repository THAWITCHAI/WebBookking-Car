import Sidebar from '@/Sidebar/Sidebar'
import React from 'react'
import Wait from '../../components/admin/Wait'

type Props = {}

export default function WaitPage({}: Props) {
  return (
    <div className='body'>
        <Sidebar/>
        <Wait/>
    </div>
  )
}