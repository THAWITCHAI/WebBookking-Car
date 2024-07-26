import React from "react";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div className="text-7xl not">
      ไม่มีพบเหี้ยไรเลย <h1 className="text-red-500">404!</h1>
    </div>
  );
}
