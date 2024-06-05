import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <aside className="absolute left-0 top-0 z-9999 flex h-screen w-72 flex-col overflow-y-hidden bg-gray-700 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 -translate-x-full">
      <SidebarHeader />
      <SidebarMenu />
    </aside>
  );
};

export default Sidebar;
