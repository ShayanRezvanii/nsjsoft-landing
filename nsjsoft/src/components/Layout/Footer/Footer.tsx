/** @format */

import { Call, Copyright, Facebook, Instagram, Message } from "iconsax-react";
import logo from "../../../../public/icon.png";
import React from "react";

function Footer() {
  return (
    <div className=" w-full xl:h-[348px] flex  justify-between xl:px-20 pt-10  xl:pt-24 pb-10 items-start xl:items-center flex-col  bg-gray">
      <div className=" relative mb-10 xl:hidden text-white flex justify-center items-center mx-10 xl:mx-0 text-2xl w-[187px] bg-white rounded-3xl h-[88px] ">
        <img src={logo} className=" absolute w-[123px] h-[120px]" />
      </div>

      <div className="  grid-cols-2 grid  gap-10  xl:grid-cols-5  mb-10 xl:mb-0  px-10 xl:px-0 xl:flex-row gap-x-16 w-full xl:max-w-[1330px]">
        <div className=" text-white text-sm  xl:text-2xl">
          <ul className=" gap-3 flex flex-col">
            <li className=" font-extrabold"> شرایط و سیاست ها</li>
            <li className=" text-xs xl:text-lg  ">سیاست حفظ حریم خصوصی</li>
          </ul>
        </div>
        <div className=" text-white text-sm  xl:text-2xl">
          <ul className=" gap-3 flex flex-col">
            <li className=" font-extrabold">شرکت</li>
            <li className=" text-xs xl:text-lg">صفحه اصلی</li>
            <li className=" text-xs xl:text-lg">درباره ما</li>
            <li className=" text-xs xl:text-lg">تماس با ما</li>
          </ul>
        </div>
        <div className=" text-white text-sm  xl:text-2xl">
          <ul className=" gap-3 flex flex-col">
            <li className=" font-extrabold"> تماس با ما</li>
            <li className=" text-xs xl:text-lg">88748501{"  (21+)"}</li>
            <li className=" text-xs xl:text-lg">example@info.com</li>
          </ul>
        </div>
        <div className=" text-white text-sm  xl:text-2xl">
          <ul className=" gap-3 flex flex-col">
            <li className=" text-lg">نشانی</li>
            <li className=" text-xs xl:text-lg">
              تهران - خیابان خرمشهر خیابان عربعلی خیابان نسترن شرقی پلاک ۵۴ طبقه
              دوم
            </li>
          </ul>
        </div>
        <div className=" relative hidden  text-white xl:flex justify-center items-center text-2xl w-[187px] bg-white rounded-3xl h-[88px] ">
          <img src={logo} className=" absolute w-[123px] h-[120px]" />
        </div>
      </div>

      <div className=" flex-col gap-y-4 items-center w-full flex">
        <div className="flex gap-6 xl:gap-12">
          <div className=" bg-white hover:bg-gray border border-gray cursor-pointer hover:border-white duration-200 hover:text-white w-[36px] h-[36px] xl:w-10 xl:h-10 rounded-full flex justify-center items-center">
            <Instagram />
          </div>
          <div className=" bg-white hover:bg-gray border border-gray cursor-pointer hover:border-white duration-200 hover:text-white w-[36px] h-[36px] xl:w-10 xl:h-10 rounded-full flex justify-center items-center">
            <Message />
          </div>
          <div className=" bg-white hover:bg-gray border border-gray cursor-pointer hover:border-white duration-200 hover:text-white w-[36px] h-[36px] xl:w-10 xl:h-10  rounded-full flex justify-center items-center">
            <Call />
          </div>
          <div className=" bg-white hover:bg-gray border border-gray cursor-pointer hover:border-white duration-200 hover:text-white w-[36px] h-[36px] xl:w-10 xl:h-10  rounded-full flex justify-center items-center">
            <Facebook />
          </div>
        </div>
        <div className=" border-t border-white w-full max-w-[500px] "></div>
        <div className=" flex gap-3 items-center px-4 xl:px-0">
          <Copyright size={14} className="text-white hidden xl:block" />
          <p className="text-white text-xs xl:text-sm">
            استفاده از مطالب این وب سایت فقط برای مقاصد غیر تجاری و با ذکر منبع
            بلامانع است. کلیه حقوق این سایت متعلق به شرکت نامدار سهیل جاوید
            می‌باشد.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
