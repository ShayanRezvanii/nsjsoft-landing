/** @format */

import React from "react";

interface SecondaryButtonProps {
  children: React.ReactNode;
}

function SecondaryButton({ children }: SecondaryButtonProps) {
  return (
    <button className=" bg-transparent border font-extrabold  border-primary text-primary hover:bg-primary/30  duration-200 w-full  text-xs px-3 xl:text-xl h-12 rounded-3xl ">
      {children}
    </button>
  );
}

export default SecondaryButton;
