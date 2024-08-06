/** @format */

import {
  ArrowLeft,
  CallReceived,
  MobileProgramming,
  Monitor,
  ShieldSecurity,
} from "iconsax-react";
import React from "react";
import IconText from "../Layout/Cards/IconText";

function Services() {
  return (
    <div
      id="services"
      className=" justify-center items-center w-full mb-32 mt-24 flex flex-col xl:flex-row xl:px-28 gap-20 "
    >
      <div>
        {/* <p className=" text-sm mb-3 xl:text-2xl text-primary text-center xl:text-right">
          خدمات ما
        </p> */}
        <p className=" text-2xl mb-4 xl:flex-col text-white xl:flex xl:gap-10  xl:text-[55px]  text-center xl:text-right font-extrabold">
          {/* <span> لورم ایپسوم </span>
          <span>متن ساختگی</span> */}
          خدمات ما
        </p>
        <div className=" max-w-[520px] flex-col flex items-end">
          <p className=" text-justify  text-white">
            شرکت نامدار سهیل جاوید با ارائه مجموعه‌ای گسترده از خدمات
            انفورماتیک، به کسب‌وکارها و سازمان‌ها کمک می‌کند تا به بهره‌وری و
            کارایی بیشتری دست یابند. این خدمات شامل طراحی و توسعه نرم‌افزارهای
            سفارشی، مشاوره فناوری اطلاعات، مدیریت و پشتیبانی شبکه‌های کامپیوتری،
            امنیت سایبری، تحلیل داده‌ها، و راهکارهای ابری می‌باشد. همچنین، سهیل
            جاوید در زمینه پیاده‌سازی خدمات نظارتی دوربین‌های مداربسته و انتقال
            تصویر، راه‌اندازی سیستم‌های VoIP و ارائه انواع تونل‌های اینترنتی نیز
            فعالیت می‌کند. با تیمی متخصص و استفاده از فناوری‌های پیشرفته، سهیل
            جاوید به مشتریان خود امکان می‌دهد تا فرآیندهای تجاری خود را
            بهینه‌سازی کرده، ریسک‌های امنیتی را کاهش داده و با نوآوری‌های روز
            دنیا همگام شوند. هدف این شرکت، ارائه راه‌حل‌های جامع و کارآمد است که
            به رشد و موفقیت پایدار مشتریان کمک می‌کند.
          </p>

          <div className=" flex items-center mt-6 gap-2">
            {/* <p className=" text-primary text-base xl:text-[20px]">
              بیشتر بخوانید
            </p> */}
            <ArrowLeft className=" text-primary  text-[20px]" />
          </div>
        </div>
      </div>

      <div className=" w-full  grid grid-cols-1 items-center justify-center  md:grid-cols-2 md:max-w-[524px] gap-8 ">
        <IconText
          bgIconColor="#377dff"
          iconCard={<MobileProgramming size={60} />}
        >
          طراحی و توسعه نرم افزارهای اختصاصی
        </IconText>
        <IconText bgIconColor="#377dff" iconCard={<ShieldSecurity size={60} />}>
          پیاده‌سازی خدمات نظارتی و امنیتی
        </IconText>
        <IconText bgIconColor="#377dff" iconCard={<CallReceived size={60} />}>
          راه‌اندازی سیستم‌های VoIP
        </IconText>
        <IconText bgIconColor="#377dff" iconCard={<Monitor size={60} />}>
          مشاوره و پشتیبانی شبکه‌های کامپیوتری
        </IconText>
      </div>
    </div>
  );
}

export default Services;
