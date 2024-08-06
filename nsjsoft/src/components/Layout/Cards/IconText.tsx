/** @format */

import React from "react";

interface IconTextProps {
  children: React.ReactNode;
  iconCard: React.ReactNode;
  bgIconColor: string;
}

function IconText({ children, iconCard, bgIconColor }: IconTextProps) {
  return (
    <div className=" w-full lg:max-w-[262px] h-[269px] text-base xl:text-2xl flex flex-col justify-center items-center gap-4 bg-white shadow-black/10 rounded-3xl shadow-lg">
      <div
        style={{ backgroundColor: bgIconColor }}
        className={`  text-white w-[100px] h-[100px] rounded-full flex flex-col justify-center items-center`}
      >
        {iconCard}
      </div>
      {children}
    </div>
  );
}

export default IconText;
