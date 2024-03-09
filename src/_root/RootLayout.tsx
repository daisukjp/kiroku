import React from "react";
import TopBar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import { Outlet } from "react-router-dom";
import BottomBar from "@/components/shared/Bottombar";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <TopBar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <BottomBar />
    </div>
  );
};

export default RootLayout;
