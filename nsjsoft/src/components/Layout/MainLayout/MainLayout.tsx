/** @format */

import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className=" w-full flex flex-col items-center font-Nian  min-h-screen mx-auto ">
      <div className=" w-full  max-w-[1440px] flex flex-col justify-center  items-center ">
        <Header />
        <div className=" px-4 xl:px-0 w-full ">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
