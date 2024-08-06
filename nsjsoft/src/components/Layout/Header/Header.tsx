/** @format */

import React, { useEffect, useState } from "react";
import logo from "../../../../public/icon.png";
import SecondaryButton from "../Button/SecondaryButton";
import { Add, HambergerMenu } from "iconsax-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
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
    <>
      <div className=" w-full flex justify-center   items-center xl:h-36 ">
        <div className=" w-full  items-center justify-between px-12 hidden xl:flex">
          <div className=" flex items-center">
            <img src={logo} className=" w-20 h-20" />
            <p className=" font-bold text-2xl">نامدار سهیل جاوید</p>
          </div>
          <div className=" w-fit flex justify-center items-center gap-10 text-2xl">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className=" cursor-pointer"
            >
              صفحه اصلی
            </Link>
            <Link
              activeClass="active"
              to="history"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className=" cursor-pointer"
            >
              رزومه ما
            </Link>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className=" cursor-pointer"
            >
              خدمات ما
            </Link>
            <Link
              activeClass="active"
              to="aboutUs"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className=" cursor-pointer"
            >
              درباره ما
            </Link>
          </div>
          <div className=" w-full max-w-[185px] ">
            <SecondaryButton>تماس با ما</SecondaryButton>
          </div>
        </div>

        <div className=" w-full  items-center flex justify-between px-4  xl:hidden">
          <div className=" w-full duration-200 max-w-[185px] ">
            {isOpen ? (
              <Add
                className="  cursor-pointer rotate-45"
                onClick={() => setIsOpen(false)}
                size={24}
              />
            ) : (
              <>
                <HambergerMenu
                  className="  cursor-pointer"
                  onClick={() => setIsOpen(true)}
                  size={24}
                />
              </>
            )}
          </div>

          <div className=" flex select-none items-center">
            <img src={logo} className=" w-20 h-20" />
          </div>
        </div>
      </div>

      {isOpen ? (
        <div className=" w-full  relative">
          <div className=" w-full  absolute  bg-white/30  backdrop-blur-md h-screen px-3 z-40">
            <motion.ul
              variants={container}
              initial="hidden"
              animate="visible"
              className=" w-full container flex flex-col justify-center items-start gap-3 text-xl"
            >
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                className=" cursor-pointer w-full"
              >
                <motion.li
                  variants={item}
                  onClick={() => setIsOpen(false)}
                  className=" cursor-pointer font-extrabold hover:bg-primary/70 hover:text-white duration-200 hover:backdrop-blur-md w-full p-2 rounded-lg "
                >
                  صفحه اصلی
                </motion.li>
              </Link>
              <Link
                activeClass="active"
                to="history"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                className=" cursor-pointer w-full"
              >
                <motion.li
                  variants={item}
                  onClick={() => setIsOpen(false)}
                  className=" cursor-pointer font-extrabold hover:bg-primary/70 hover:text-white duration-200 hover:backdrop-blur-md w-full p-2 rounded-lg "
                >
                  رزومه ما
                </motion.li>
              </Link>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                className=" cursor-pointer w-full"
              >
                <motion.li
                  variants={item}
                  onClick={() => setIsOpen(false)}
                  className=" cursor-pointer font-extrabold  hover:bg-primary/70 hover:text-white duration-200 hover:backdrop-blur-md w-full p-2 rounded-lg "
                >
                  خدمات ما
                </motion.li>
              </Link>
              <Link
                activeClass="active"
                to="aboutUs"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                className=" cursor-pointer w-full"
              >
                <motion.li
                  variants={item}
                  onClick={() => setIsOpen(false)}
                  className=" cursor-pointer font-extrabold hover:bg-primary/70 hover:text-white duration-200 hover:backdrop-blur-md w-full p-2 rounded-lg "
                >
                  درباره ما
                </motion.li>
              </Link>
            </motion.ul>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Header;
