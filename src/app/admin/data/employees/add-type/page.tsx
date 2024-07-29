import AddTypeEmployee from "@/app/components/admin/AddTypeEmployee";
import Sidebar from "@/Sidebar/Sidebar";
import React from "react";

type Props = {};

export default function AddTypeEmploeePage({}: Props) {
  return (
    <div className="body">
      <Sidebar />
      <AddTypeEmployee />
    </div>
  );
}
