import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const AppLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MainContent />
    </div>
  );
};
export default AppLayout;
