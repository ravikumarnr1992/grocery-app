import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Toaster />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
