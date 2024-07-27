import Link from "next/link";
import React from "react";

type Props = {};

export default function DataCar({}: Props) {
  return (
    <div className="content">
      <h1 className="text-5xl font-light">ข้อมูลรถ</h1>
      <hr />
      <div className="container mt-10">
        <button
          type="button"
          className="mb-10 focus:outline-none text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-300 rounded-2xl text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          <Link href={"/admin/data/cars/addcar"}>เพิ่มข้อมูล</Link>
        </button>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                  รหัสรถ
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  ยี่ห้อ
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  รุ่น
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  ที่นั่ง
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  สี
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  ป้ายทะเบียน
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  ราคา
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  สถานะ
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white font-thin"
                >
                  2645
                </th>
                <td className="px-6 py-4">ฮอนด้า</td>
                <td className="px-6 py-4">MXS 125 SF</td>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">สีแดง</td>
                <td className="px-6 py-4">125ฏย</td>
                <td className="px-6 py-4">120 ฿</td>
                <td className="px-6 py-4 text-yellow-500">รออนุมัติ</td>
                <td className="px-6 py-4 text-yellow-500">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                  >
                    <Link href={'/admin/data/cars/edit/1'}>แก้ไข</Link> 
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    ลบ
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
