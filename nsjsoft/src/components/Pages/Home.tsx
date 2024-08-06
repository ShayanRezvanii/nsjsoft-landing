/** @format */

import React from "react";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import HomeBanner from "../../../public/Images/HomeBanner.png";
import blueEllipse from "../../../public/Icons/Ellipse 90 Blue.svg";
import redEllipse from "../../../public/Icons/Ellipse 88 Red.svg";
import dotsBlue from "../../../public/Icons/Group 2140 Blue.svg";
import dotsRed from "../../../public/Icons/Group 2141 Reed.svg";
function Home() {
  return (
    <div id="home" className=" w-full flex mt-4 xl:mt-0 justify-center">
      <div className=" flex flex-col items-center">
        <h1 className=" text-[28px] xl:text-[64px] sfont-extrabold">
          لورم ایپسوم متن ساختگی
        </h1>
        <h1 className=" text-[28px] xl:text-[64px] text-center xl:text-right  font-extrabold">
          با تولید سادگی نامفهوم از صنعت چاپ
        </h1>

        <p className="text-center text-[14px] max-w-[340px] xl:max-w-fit xl:text-lg text-grayLight font-light">
          چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
          <br />و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
          بهبود ابزارهای کاربردی می باشد.
        </p>

        <div className=" absolute -left-0 xl:left-40 top-[280px] xl:top-[330px]">
          <img src={blueEllipse} />
        </div>
        <div className=" absolute -right-8 xl:top-[210px]">
          <img src={redEllipse} />
        </div>
        <div className=" absolute right-56 top-[510px]">
          <img src={blueEllipse} />
        </div>
        <div className=" absolute left-80  hidden xl:block  top-[720px]">
          <img src={redEllipse} />
        </div>

        <div
          className=" w-full mt-6
         max-w-[146px] xl:max-w-[201px]"
        >
          <PrimaryButton>شروع همکاری با ما</PrimaryButton>
        </div>

        <div className=" relative my-28">
          <div className=" absolute -left-2 xl:left-40 -z-10 -top-3">
            <img src={dotsBlue} />
          </div>

          <img className=" z-30" src={HomeBanner} />

          <div className=" absolute left-[180px] -z-10 top-[136px] xl:top-[448px]">
            <img src={dotsRed} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
