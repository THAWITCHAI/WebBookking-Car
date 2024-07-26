import React from "react";

type Props = {};

export default function Wait({}: Props) {
  return (
    <div className="content">
      <h1 className="text-5xl font-light">รออนุมัติ</h1>
      <hr />
      <div className="container mt-10">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                  รหัสจองรถ
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  ชื่อผู้จอง
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  ยี่ห้อ
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  รุ่น
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  วันที่เริ่ม
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  วันที่สิ้นสุด
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
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  8421
                </th>
                <td className="px-6 py-4">นาย ธวิชชัย บุญส่ง</td>
                <td className="px-6 py-4">ฮอนด้า</td>
                <td className="px-6 py-4">MXS 125 SF</td>
                <td className="px-6 py-4">12/06/2567</td>
                <td className="px-6 py-4">13/09/2567</td>
                <td className="px-6 py-4">120 ฿</td>
                <td className="px-6 py-4 text-yellow-500">รออนุมัติ</td>
                <td className="px-6 py-4 text-yellow-500">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-300 rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    อนุมัติ
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
