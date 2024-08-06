/** @format */

import React from "react";
import { useInView } from "react-intersection-observer";
import dotsBlue from "../../../public/Icons/Group 2140 Blue.svg";
import tushehbar from "../../../public/Images/Tushehbar.png";
import akam from "../../../public/Images/Akam.png";
import sofragol from "../../../public/Images/sofragol.png";
import ImageCard from "../Layout/Images/ImageCard";
import SecondaryButton from "../Layout/Button/SecondaryButton";
import { motion } from "framer-motion";

function History() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.7,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div
      ref={ref}
      id="history"
      className="relative justify-center flex-col flex  items-center w-full mb-20 xl:mb-40  xl:px-28 gap-16"
    >
      <div className="flex flex-col items-center gap-6">
        {/* <h1 className="text-sm xl:text-2xl text-primary">رزومه ی ما</h1> */}
        <p className="text-2xl xl:text-[55px] text-white font-extrabold">
          رزومه ما
        </p>
        <div className="max-w-[674px]">
          <p className="text-center text-white">
            شرکت نامدار سهیل جاوید با بیش از دو دهه تجربه در زمینه ارائه خدمات
            انفورماتیک و فناوری اطلاعات، به یکی از پیشروترین و معتبرترین شرکت‌ها
            در این حوزه تبدیل شده است. ما با بهره‌گیری از تیمی متخصص و با تجربه،
            طیف وسیعی از خدمات شامل طراحی و توسعه نرم‌افزارهای سفارشی، مشاوره
            فناوری اطلاعات، مدیریت و پشتیبانی شبکه‌های کامپیوتری، امنیت سایبری،
            تحلیل داده‌ها و راهکارهای ابری را ارائه می‌دهیم. همچنین، در زمینه
            پیاده‌سازی سیستم‌های نظارتی دوربین‌های مداربسته، انتقال تصویر،
            راه‌اندازی سیستم‌های VoIP و ارائه انواع تونل‌های اینترنتی نیز فعالیت
            می‌کنیم. تلاش ما بر این است که با استفاده از فناوری‌های پیشرفته و
            نوآوری‌های روز، راه‌حل‌های جامع و کارآمدی را ارائه داده و به موفقیت
            پایدار مشتریان خود کمک کنیم
          </p>
        </div>
      </div>
      <div className="absolute hidden xl:block right-0 top-32 -z-10 -rotate-[20deg]">
        <img src={dotsBlue} alt="Decorative Dots" />
      </div>

      <motion.ul
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="hidden w-full md:flex justify-center gap-14"
      >
        <motion.li variants={item}>
          <ImageCard width="350" height="350" image={sofragol} rounded="30px" />
        </motion.li>

        <motion.li variants={item}>
          <ImageCard
            width="400"
            height="400"
            rounded="30px"
            image={tushehbar}
          />
        </motion.li>

        <motion.li variants={item}>
          <ImageCard width="350" height="350" rounded="30px" image={akam} />
        </motion.li>
      </motion.ul>

      <motion.ul
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full flex flex-col items-center md:hidden justify-center gap-14"
      >
        <motion.li variants={item}>
          <ImageCard width="300" height="300" image={sofragol} rounded="30px" />
        </motion.li>
        <motion.li variants={item}>
          <ImageCard
            width="300"
            height="300"
            image={tushehbar}
            rounded="30px"
          />
        </motion.li>
        <motion.li variants={item}>
          <ImageCard width="300" height="300" image={akam} rounded="30px" />
        </motion.li>
      </motion.ul>
      <a href="tel:02188748501" className=" w-full  max-w-[185px]">
        <div className="w-full max-w-[226px]">
          <SecondaryButton>تماس با کارشناسان ما</SecondaryButton>
        </div>
      </a>
    </div>
  );
}

export default History;
