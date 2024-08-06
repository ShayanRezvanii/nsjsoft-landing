/** @format */

import PrimaryButton from "../Layout/Button/PrimaryButton";
import bussinesPic from "../../../public/Images/bussinesspic.png";
import dotsBlue from "../../../public/Icons/Group 2140 Blue.svg";
import dotsOrange from "../../../public/Icons/Group 2140 orange.svg";
function Bussiness() {
  return (
    <div className=" w-full flex flex-col-reverse md:flex-row items-center xl:items-start justify-between md:px-40  xl:px-28 mb-32">
      <div className=" flex mt-28 xl:mt-0 flex-col items-center xl:items-start gap-6">
        <p className=" text-[28px] text-center xl:text-right text-white xl:text-[55px] font-extrabold">
          لورم
          <br className=" hidden xl:block text-white" /> متن ساختگی <br />
          با تولید؟
        </p>

        <p className=" text-[20px] text-white">
          لورم لیپسوم متن ساختگی، با تولید نامفهوم
        </p>
        <div className=" w-full max-w-[140px]  xl:max-w-[193px]">
          <PrimaryButton>متن تست</PrimaryButton>
        </div>
      </div>

      <div className=" flex relative">
        <img
          className=" w-[221px] h-[196px] xl:w-[325px] xl:h-[288px] rounded-[30px]"
          src={bussinesPic}
        />
        <div className=" absolute left-24 -z-10  bottom-8">
          <img src={dotsOrange} />
        </div>
        <img
          className=" w-[221px] h-[196px] xl:w-[325px] absolute -left-8 xl:left-56 top-20 xl:top-14 xl:h-[288px] rounded-[30px]"
          src={bussinesPic}
        />
        <div className=" absolute hidden xl:block -right-56 -z-10 top-7">
          <img src={dotsBlue} />
        </div>
      </div>
    </div>
  );
}

export default Bussiness;
