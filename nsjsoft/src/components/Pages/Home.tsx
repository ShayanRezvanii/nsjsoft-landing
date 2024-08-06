/** @format */

import React from "react";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import HomeBanner from "../../../public/Images/Network.png";
// import blueEllipse from "../../../public/Icons/Ellipse 90 Blue.svg";
import redEllipse from "../../../public/Icons/Ellipse 88 Red.svg";
import dotsBlue from "../../../public/Icons/Group 2140 Blue.svg";
import dotsRed from "../../../public/Icons/Group 2141 Reed.svg";
function Home() {
  return (
    <div id="home" className=" w-full flex mt-4 xl:mt-0 justify-center">
      <div className=" flex flex-col  text-white items-center">
        <h1 className=" text-[28px] xl:text-[64px] font-light">
          همراه شما در مسیر فناوری و نوآوری
        </h1>
        <h1 className=" text-[28px] xl:text-[64px] text-center xl:text-right  font-bold">
          نامدار سهیل جاوید
        </h1>

        <p className="text-center text-[14px] max-w-[340px] xl:max-w-fit xl:text-lg text-white font-light">
          نامدار سهیل جاوید با بهره‌گیری از تکنولوژی‌های روز دنیا و تیمی متخصص و
          مجرب، خدمات انفورماتیک را به سطحی جدید و بی‌نظیر ارتقاء می‌دهد. <br />
          همراه ما باشید تا با نوآوری‌های پیشرفته و راهکارهای خلاقانه، تجربه‌ای
          متفاوت از کارایی و بهره‌وری در دنیای دیجیتال را احساس کنید و آینده‌ای
          روشن‌تر برای کسب‌وکار خود رقم بزنید.
        </p>

        <div className=" absolute animate-bounce -left-0 xl:left-40 top-[280px] xl:top-[330px]">
          <div className="  rounded-full bg-gradient-to-tr from-blue to-white/90 w-[31px] h-[31px] "></div>
        </div>
        <div className=" absolute animate-bounce  -right-8 xl:top-[210px]">
          <img src={redEllipse} />
        </div>
        <div className=" absolute animate-bounce right-56 top-[510px]">
          {/* <img src={blueEllipse} /> */}
          <div className="  rounded-full bg-gradient-to-tr from-blue to-white/90 w-[31px] h-[31px] "></div>
        </div>
        <div className=" absolute animate-bounce left-80  hidden xl:block  top-[720px]">
          <img src={redEllipse} />
        </div>

        <div
          className=" w-full mt-6
         max-w-[146px] xl:max-w-[201px]"
        >
          <a href="tel:02188748501">
            <PrimaryButton>شروع همکاری با ما</PrimaryButton>
          </a>
        </div>

        <div className=" relative my-28">
          <div className=" absolute -left-2 xl:left-40 -z-10 -top-3">
            <img src={dotsBlue} />
          </div>

          <div className=" w-full relative ">
            <img
              className=" z-30 relative w-[343px] rounded-3xl h-[232px] xl:w-[739px] xl:h-[501px]"
              src={HomeBanner}
            />
            <div className=" absolute z-40 w-full h-full top-0 bg-gradient-to-b from-black/0 to-black/70"></div>
          </div>

          <div className=" absolute left-[180px] -z-10 top-[136px] xl:top-[448px]">
            <img src={dotsRed} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
