'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function SidebarUser({}: Props) {
  const router = useRouter()
  return (
    <div className="sidebarUser">
      <div className="sidebar-head">
        <div className="logo">
          <h1 className="name-logo">JS</h1>
        </div>
        <div className="profile">
          <h1 className="name">John Wick</h1>
          <p className="role">User</p>
        </div>
      </div>

      <div className="sidebar-menu">
        <ul>
          <li className="menu-i">
            <Image src={"/booking.png"} width={24} height={24} alt={""} />
            <Link href={"/client/booking"} className="link">
              จองรถ
            </Link>
          </li>
          <li className="menu-i">
            <Image src={"/to-do-list.png"} width={24} height={24} alt={""} />
            <Link href={"/client/list-cars"} className="link">
              ข้อมูลการจอง
            </Link>
          </li>
        </ul>
      </div>

      <div className="sidebar-footer">
        <ul>
          <li className="menu-i">
            <Image src={"/logout.png"} width={24} height={24} alt={""} />
            <button onClick={()=>router.replace('/')} className="link">ออกจากระบบ</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
