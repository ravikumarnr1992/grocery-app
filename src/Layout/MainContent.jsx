import MainContentHeader from "./MainContentHeader";
import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <MainContentHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainContent;
