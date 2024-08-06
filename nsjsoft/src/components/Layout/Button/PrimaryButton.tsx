/** @format */

import React from "react";

interface SecondaryButtonProps {
  children: React.ReactNode;
}

function PrimaryButton({ children }: SecondaryButtonProps) {
  return (
    <button className=" bg-primary border font-extrabold shadow-md shadow-primary/50 text-xs px-3 xl:text-xl border-primary text-black hover:bg-black hover:text-primary  duration-200 w-full h-12 rounded-3xl ">
      {children}
    </button>
  );
}

export default PrimaryButton;
