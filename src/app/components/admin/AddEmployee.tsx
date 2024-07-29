"use client";
import NavbarAddminEmployee from "@/Navbar/NavbarAddminEmployee";
import React from "react";

type Props = {};

export default function AddEmployee({}: Props) {
  return (
    <div className="content">
      <NavbarAddminEmployee />
      <div className="mt-5 add-car">
        <form>
          <div className="main">
            <div className="input">
              <label>รหัสพนักงาน</label>
              <input className="input-1" type="number" placeholder="8452" />
            </div>
            <div className="input">
              <label>ชื่อ</label>
              <input className="input-1" type="text" placeholder="Honda" />
            </div>
            <div className="input">
              <label>อีเมลล์</label>
              <input className="input-1" type="email" placeholder="Wave 110i" />
            </div>
            <div className="input">
              <label>รหัสผ่าน</label>
              <input className="input-1" type="password" />
            </div>
            <div className="input">
              <label>เบอร์</label>
              <input className="input-1" type="text" />
            </div>
            <div className="input">
              <label>ชื่อเล่น</label>
              <input className="input-1" type="text" placeholder="3" />
            </div>
            <div className="input">
              <label>บทบาท</label>
              <select
                className="w-2/5 bg-gray-400 rounded-md text-white"
                name=""
                id=""
                onChange={(e) => console.log(e.target.value)}
              >
                <option>เลือก..</option>
                <option className="font-thin">Admin</option>
                <option className="font-thin">User</option>
              </select>
            </div>
          </div>
          <div className="btn flex justify-center">
            <button className="bg-green-600 rounded-md w-24 mt-10 text-white h-10">
              ยืนยัน
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
