"use client";
import Sidebar from "@/Sidebar/Sidebar";
import React from "react";

type Props = any;

export default function page({ params }: Props) {
  const { id } = params;
  return (
    <div className="body">
      <Sidebar />
      <div className="content">
        <h1 className="text-3xl text-center">ID: {id}</h1>
        <div className="mt-5 add-car">
          <form>
            <div className="main">
              <div className="input">
                <label>รหัสรถ</label>
                <input className="input-1" type="text" placeholder="8452" />
              </div>
              <div className="input">
                <label>ยี่ห้อ</label>
                <input className="input-1" type="text" placeholder="Honda" />
              </div>
              <div className="input">
                <label>รุ่น</label>
                <input
                  className="input-1"
                  type="text"
                  placeholder="Wave 110i"
                />
              </div>
              <div className="input">
                <label>ที่นั่ง</label>
                <input className="input-1" type="number" placeholder="3" />
              </div>
              <div className="input">
                <label>สี</label>
                <input className="input-1" type="color" />
              </div>
              <div className="input">
                <label>ป้ายทะเบียน</label>
                <input className="input-1" type="text" placeholder="1กข" />
              </div>
              <div className="input">
                <label>ประเภทรถ</label>
                <select
                  className="w-2/5 "
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option>เลือก..</option>
                  <option>Ok2</option>
                  <option>Ok3</option>
                  <option>Ok4</option>
                </select>
              </div>
              <div className="input">
                <label>ราคา</label>
                <input className="input-1" type="number" placeholder="80 ฿" />
              </div>
              <div className="input">
                <label>รูป</label>
                <input className="image" type="file" />
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
    </div>
  );
}
