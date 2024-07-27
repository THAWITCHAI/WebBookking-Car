'use client'
import NavbarAddmin from "@/Navbar/NavbarAddmin";
import React from "react";

type Props = {};

export default function AddTypeCar({}: Props) {
  return (
    <div className="content">
      <NavbarAddmin />
      <div className="mt-5 add-car">
        <form>
          <div className="main">
            <div className="input">
              <label>รหัสประเภทรถ</label>
              <input className="input-1" type="number" placeholder="8452" />
            </div>
            <div className="input">
              <label>ชื่อประเภท</label>
              <input className="input-1" type="text" placeholder="Honda" />
            </div>
          </div>
          <div className="btn flex justify-center">
            <button className="bg-green-600 rounded-md w-24 mt-10 text-white h-10">ยืนยัน</button>
          </div>
        </form>
      </div>
    </div>
  );
}
