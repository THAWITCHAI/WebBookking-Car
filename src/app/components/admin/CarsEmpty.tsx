import React from "react";

type Props = {};

export default function CarEmpty({}: Props) {
  return (
    <div className="content">
      <h1 className="text-5xl font-light">รถว่าง</h1>
      <hr />
      <div className="container mt-10">
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
                  ราคา
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  5743
                </th>
                <td className="px-6 py-4">ฮอนด้า</td>
                <td className="px-6 py-4">MXS 125 SF</td>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">120 ฿</td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
