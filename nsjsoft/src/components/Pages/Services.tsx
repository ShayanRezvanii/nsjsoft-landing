/** @format */

import { ArrowLeft, Designtools, Monitor, Photoshop } from "iconsax-react";
import React from "react";
import IconText from "../Layout/Cards/IconText";

function Services() {
  return (
    <div
      id="services"
      className=" justify-center items-center w-full mb-40 mt-24 flex flex-col xl:flex-row xl:px-28 gap-20 "
    >
      <div>
        <p className=" text-sm mb-3 xl:text-2xl text-primary text-center xl:text-right">
          خدمات ما
        </p>
        <p className=" text-2xl mb-4 xl:flex-col xl:flex xl:gap-10  xl:text-[55px]  text-center xl:text-right font-extrabold">
          <span> لورم ایپسوم </span>
          <span>متن ساختگی</span>
        </p>
        <div className=" max-w-[520px] flex-col flex items-end">
          <p className=" text-justify  text-grayLight">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
          </p>

          <div className=" flex items-center mt-6 gap-2">
            <p className=" text-primary text-base xl:text-[20px]">
              بیشتر بخوانید
            </p>
            <ArrowLeft className=" text-primary  text-[20px]" />
          </div>
        </div>
      </div>

      <div className=" w-full  grid grid-cols-1 items-center justify-center  md:grid-cols-2 md:max-w-[524px] gap-8 ">
        <IconText bgIconColor="#377dff" iconCard={<Monitor size={24} />}>
          طراحی سایت
        </IconText>
        <IconText bgIconColor="#377dff" iconCard={<Photoshop size={24} />}>
          طراحی سایت
        </IconText>
        <IconText bgIconColor="#377dff" iconCard={<Designtools size={24} />}>
          طراحی سایت
        </IconText>
        <IconText bgIconColor="#377dff" iconCard={<Monitor size={24} />}>
          طراحی سایت
        </IconText>
      </div>
    </div>
  );
}

export default Services;
