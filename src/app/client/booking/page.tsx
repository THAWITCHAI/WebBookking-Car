import Booking from "@/app/components/client/Booking";
import Navabar from "@/Navbar/Navabar";
import SidebarUser from "@/Sidebar/SidebarUser";
import React from "react";

type Props = {};

export default function BookingPage({}: Props) {
  return (
    <div className="body">
      <SidebarUser />
      <div className="content-user">
        <Navabar />
        <Booking />
      </div>
    </div>
  );
}
