/** @format */

import { Call, Copyright, Instagram, Message } from "iconsax-react";
// import logo from "../../../../public/Images/footLogo.png";
import logo from "../../../../public/icon.png";
import Nasr from "../../../../public/Images/Nasr.jpg";

function Footer() {
  return (
    <div className=" w-full flex flex-col xl:flex-row  bg-gray items-start xl:items-center  xl:px-24 ">
      <div className=" w-full xl:h-[348px] flex  justify-between xl:px-20 pt-10  xl:pt-24 pb-10 items-start xl:items-center flex-col ">
        <div className=" flex gap-8 px-10">
          <div className=" relative mb-10 xl:hidden text-white flex justify-center items-center  xl:mx-0 text-2xl w-[140px] bg-white rounded-3xl h-[140px] ">
            <img
              src={logo}
              className=" absolute object-fill w-[120px] h-[120px]"
            />
          </div>

          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative mb-10 xl:hidden text-white flex justify-center items-center xl:mx-0 text-2xl w-[140px] bg-white rounded-3xl h-[140px]">
              <img
                src={Nasr}
                className="absolute object-fill w-[120px] h-[120px]"
              />
            </div>
          </a>
        </div>

        <div className="  flex justify-center items-center  gap-10    mb-10 xl:mb-0  px-10 xl:px-0 xl:flex-row gap-x-16 w-full xl:max-w-[1330px]">
          {/* <div className=" text-white text-sm  xl:text-2xl">
          <ul className=" gap-3 flex flex-col">
            <li className=" font-extrabold"> شرایط و سیاست ها</li>
            <li className=" text-xs xl:text-lg  ">سیاست حفظ حریم خصوصی</li>
          </ul>
        </div> */}
          {/* <div className=" text-white text-sm  xl:text-2xl">
          <ul className=" gap-3 flex flex-col">
            <li className=" font-extrabold">شرکت</li>
            <li className=" text-xs xl:text-lg">صفحه اصلی</li>
            <li className=" text-xs xl:text-lg">درباره ما</li>
            <li className=" text-xs xl:text-lg">تماس با ما</li>
          </ul>
        </div> */}
          <div className=" text-white text-sm  xl:text-2xl">
            <ul className=" gap-3 flex flex-col">
              <li className=" font-extrabold">نشانی</li>
              <li className=" text-xs xl:text-lg">
                تهران - خیابان خرمشهر خیابان عربعلی خیابان نسترن شرقی پلاک 40
                طبقه دوم
              </li>
            </ul>
          </div>
          <div className=" text-white text-sm  xl:text-2xl">
            <ul className=" gap-3 flex flex-col">
              <li className=" font-extrabold"> تماس با ما</li>
              <div className=" flex gap-3">
                <li className=" text-xs xl:text-lg">88748501{"  (21+)"}</li>
                <div>|</div>
                <li className=" text-xs xl:text-lg">info@funicket.ir</li>
              </div>
            </ul>
          </div>

          {/* <div className=" relative hidden  text-white xl:flex justify-center items-center text-2xl w-[187px] bg-white rounded-3xl h-[88px] ">
          <img
            src={logo}
            className=" absolute w-[140px]  object-fill h-[40px]"
          />
        </div> */}
        </div>

        <div className=" flex-col gap-y-4 items-center w-full flex">
          <div className="flex gap-6 xl:gap-12">
            <a
              target="_blank"
              href="https://instagram.com/nsjsoft.ir"
              className=" bg-white hover:bg-gray border border-gray cursor-pointer hover:border-white duration-200 hover:text-white w-[36px] h-[36px] xl:w-10 xl:h-10 rounded-full flex justify-center items-center"
            >
              <Instagram />
            </a>
            <a
              target="_blank"
              href="mailto:info@funicket.ir"
              className=" bg-white hover:bg-gray border border-gray cursor-pointer hover:border-white duration-200 hover:text-white w-[36px] h-[36px] xl:w-10 xl:h-10 rounded-full flex justify-center items-center"
            >
              <Message />
            </a>
            <a
              href="tel:02188748501"
              className=" bg-white hover:bg-gray border border-gray cursor-pointer hover:border-white duration-200 hover:text-white w-[36px] h-[36px] xl:w-10 xl:h-10  rounded-full flex justify-center items-center"
            >
              <Call />
            </a>
          </div>
          <div className=" border-t border-white w-full max-w-[500px] "></div>
          <div className=" flex gap-3 items-center px-4 xl:px-0">
            <Copyright size={14} className="text-white hidden xl:block" />
            <p className="text-white text-xs xl:text-sm">
              استفاده از مطالب این وب سایت فقط برای مقاصد غیر تجاری و با ذکر
              منبع بلامانع است. کلیه حقوق این سایت متعلق به شرکت نامدار سهیل
              جاوید می‌باشد.
            </p>
          </div>
        </div>
      </div>

      <div className=" flex gap-10">
        <div className=" relative hidden  text-white xl:flex justify-center items-center text-2xl w-[187px] bg-white rounded-3xl h-[187px] ">
          <img
            src={logo}
            className=" absolute w-[140px]  object-fill h-[140px]"
          />
        </div>
        <a
          href="https://tehran.irannsr.org/fa/trade_unit/2553353/swd_id/104366/%D8%A7%D8%B9%D8%B6%D8%A7%DB%8C-%D8%AD%D9%82%D9%88%D9%82%DB%8C-%D9%86%D8%A7%D9%85%D8%AF%D8%A7%D8%B1-%D8%B3%D9%87%DB%8C%D9%84-%D8%AC%D8%A7%D9%88%DB%8C%D8%AF.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className=" relative hidden  text-white xl:flex justify-center items-center text-2xl w-[187px] bg-white rounded-3xl h-[187px] ">
            <img
              src={Nasr}
              className=" absolute w-[140px]  object-fill h-[140px]"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Footer;
