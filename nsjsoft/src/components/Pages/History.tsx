/** @format */

import React from "react";
import { useInView } from "react-intersection-observer";
import dotsBlue from "../../../public/Icons/Group 2140 Blue.svg";
import historyBanner from "../../../public/Images/historyPic.png";
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
        <h1 className="text-sm xl:text-2xl text-primary">رزومه ی ما</h1>
        <p className="text-2xl xl:text-[55px] font-extrabold">
          لورم لیپسوم متن ساختگی
        </p>
        <div className="max-w-[674px]">
          <p className="text-center">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
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
          <ImageCard
            width="350"
            height="350"
            title="متن تست"
            image={historyBanner}
            rounded="30px"
          />
        </motion.li>

        <motion.li variants={item}>
          <ImageCard
            width="400"
            height="400"
            rounded="30px"
            title="لورم لیپسوم"
            image={historyBanner}
          />
        </motion.li>

        <motion.li variants={item}>
          <ImageCard
            width="350"
            height="350"
            rounded="30px"
            title="لورم لیپسوم"
            image={historyBanner}
          />
        </motion.li>
      </motion.ul>

      <motion.ul
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full flex flex-col items-center md:hidden justify-center gap-14"
      >
        <motion.li variants={item}>
          <ImageCard
            width="300"
            height="300"
            title="متن تست"
            image={historyBanner}
            rounded="30px"
          />
        </motion.li>
        <motion.li variants={item}>
          <ImageCard
            width="300"
            height="300"
            title="متن تست"
            image={historyBanner}
            rounded="30px"
          />
        </motion.li>
        <motion.li variants={item}>
          <ImageCard
            width="300"
            height="300"
            title="متن تست"
            image={historyBanner}
            rounded="30px"
          />
        </motion.li>
        <motion.li variants={item}>
          <ImageCard
            width="300"
            height="300"
            title="متن تست"
            image={historyBanner}
            rounded="30px"
          />
        </motion.li>
      </motion.ul>
      <div className="w-full max-w-[226px]">
        <SecondaryButton>متن تست</SecondaryButton>
      </div>
    </div>
  );
}

export default History;
