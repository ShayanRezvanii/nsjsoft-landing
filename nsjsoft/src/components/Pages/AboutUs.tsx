/** @format */

import React from "react";
import aboutUsBanner from "../../../public/Images/aboutUsBanner.png";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import SecondaryButton from "../Layout/Button/SecondaryButton";
import dotsBlue from "../../../public/Icons/Group 2140 Blue.svg";
import dotsRed from "../../../public/Icons/Group 2141 Reed.svg";
function AboutUs() {
  return (
    <div id="aboutUs" className=" w-full flex flex-col xl:px-14">
      <div className=" w-full flex flex-col items-center gap-6 justify-center">
        <h1 className=" text-sm xl:text-2xl text-primary">درباره ما</h1>
        <p className=" text-2xl xl:text-[55px] font-extrabold">
          با تیم ما آشنا شوید
        </p>
      </div>

      <div className=" w-full mt-6 xl:mt-0 ">
        <div className=" flex flex-col-reverse xl:flex-row w-full justify-center gap-10 items-center">
          <div className=" flex my-10 xl:my-16 relative  h-[248px] xl:h-[402px] max-w-[340px] xl:max-w-[562px] w-full">
            <div className=" absolute left-0  xl:-right-7 -z-10 -top-4">
              <img src={dotsRed} />
            </div>
            <img src={aboutUsBanner} />
            <div className=" absolute hidden xl:block -left-8 -z-10 -bottom-8">
              <img src={dotsBlue} />
            </div>
          </div>

          <div className=" w-full flex gap-4 flex-col max-w-[610px]">
            <p className=" text-justify text-sm xl:text-[20px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <p className=" text-justify text-sm text-[20px]">
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <div className=" w-full max-w-[420px] gap-6 flex">
              <PrimaryButton>درباره ما</PrimaryButton>
              <SecondaryButton>متن تست</SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
