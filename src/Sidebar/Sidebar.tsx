import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className="sidebar">
      <div className="sidebar-head">
        <div className="logo">
          <h1 className="name-logo">JS</h1>
        </div>
        <div className="profile">
          <h1 className="name">ทรรศ</h1>
          <p className="role">แอดมิน</p>
        </div>
      </div>

      <div className="sidebar-menu">
        <ul>
          <li className="menu-i">
            <Image src={"/security.png"} width={24} height={24} alt={""} />
            <Link href={"/admin/wait"} className="link">
              รออนุมัติ
            </Link>
          </li>
          <li className="menu-i">
            <Image src={"/car.png"} width={24} height={24} alt={""} />
            <Link href={"/admin/data/cars"} className="link">
              ข้อมูลรถ
            </Link>
          </li>
          <li className="menu-i">
            <Image src={"/employee.png"} width={24} height={24} alt={""} />
            <Link href={"/admin/data/employees"} className="link">
              ข้อมูลพนังงาน
            </Link>
          </li>
          <li className="menu-i">
            <Image src={"/user.png"} width={24} height={24} alt={""} />
            <Link href={"/admin/data/users"} className="link">
              ข้อมูลลูกค้า
            </Link>
          </li>
          <li className="menu-i">
            <Image src={"/return.png"} width={24} height={24} alt={""} />
            <Link href={"/admin/cars-empty"} className="link">
              รถที่ว่าง
            </Link>
          </li>
        </ul>
      </div>

      <div className="sidebar-footer">
        <ul>
          <li className="menu-i">
            <Image src={"/logout.png"} width={24} height={24} alt={""} />
            <button className="link">ออกจากระบบ</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
