import Image from "next/image";
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
            <h1>รออนุมัติ</h1>
          </li>
          <li className="menu-i">
            <Image src={"/car.png"} width={24} height={24} alt={""} />
            <h1>ข้อมูลรถ</h1>
          </li>
          <li className="menu-i">
            <Image src={"/employee.png"} width={24} height={24} alt={""} />
            <h1>ข้อมูลพนังงาน</h1>
          </li>
          <li className="menu-i">
            <Image src={"/user.png"} width={24} height={24} alt={""} />
            <h1>ข้อมูลลูกค้า</h1>
          </li>
          <li className="menu-i">
            <Image src={"/return.png"} width={24} height={24} alt={""} />
            <h1>รถที่ว่าง</h1>
          </li>
        </ul>
      </div>
      
      <div className="sidebar-footer">
        <ul>
          <li className="menu-i">
            <Image src={"/logout.png"} width={24} height={24} alt={""} />
            <h1>ออกจากระบบ</h1>
          </li>
        </ul>
      </div>
    </div>
  );
}
