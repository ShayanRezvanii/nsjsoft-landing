/** @format */

import funicketBanner from "../../../public/Images/Funicket.jpg";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import SecondaryButton from "../Layout/Button/SecondaryButton";
import dotsBlue from "../../../public/Icons/Group 2140 Blue.svg";
import dotsRed from "../../../public/Icons/Group 2141 Reed.svg";
function AboutUs() {
  return (
    <div id="aboutUs" className=" w-full flex flex-col xl:px-14">
      <div className=" w-full flex flex-col items-center gap-6 justify-center">
        <h1 className=" text-sm xl:text-2xl text-primary">پلتفرم ما</h1>
        <p className=" text-2xl text-white xl:text-[55px] font-extrabold">
          با فانیکت آشنا شوید
        </p>
      </div>

      <div className=" w-full mt-6 xl:mt-0 ">
        <div className=" flex flex-col-reverse xl:flex-row w-full justify-center gap-10 items-center">
          <div className=" flex my-10 xl:my-16 relative  h-[248px] xl:h-[402px] max-w-[340px] xl:max-w-[562px] w-full">
            <div className=" absolute left-0  xl:-right-7 -z-10 -top-4">
              <img src={dotsRed} />
            </div>
            <img src={funicketBanner} className=" rounded-3xl" />
            <div className=" absolute hidden xl:block -left-8 -z-10 -bottom-8">
              <img src={dotsBlue} />
            </div>
          </div>

          <div className=" w-full text-white flex gap-4 flex-col max-w-[610px]">
            <p className=" text-justify leading-7 text-sm xl:text-[20px]">
              پلتفرم "فانیکت" که توسط شرکت نامدار سهیل جاوید طراحی و توسعه یافته
              است، یک راه‌حل جامع و کارآمد برای رزرو اماکن تفریحی و ورزشی به
              شمار می‌آید. این پلتفرم با هدف تسهیل و بهبود تجربه کاربران در
              زمینه یافتن و رزرو اماکن مختلف از جمله سالن‌های ورزشی، استخرها،
              باشگاه‌های بدنسازی، زمین‌های تنیس، و دیگر مکان‌های تفریحی و ورزشی
              طراحی شده است. با استفاده از فناوری‌های پیشرفته و رابط کاربری ساده
              و کاربرپسند، فانیکت به کاربران این امکان را می‌دهد تا به راحتی و
              با چند کلیک، مکان دلخواه خود را جستجو و رزرو کنند.
            </p>
            <p className=" text-justify text-sm text-[20px]">
              همچنین، این پلتفرم اطلاعات کاملی از امکانات، تصاویر، نقد و
              بررسی‌ها، و قیمت‌ها را ارائه می‌دهد تا کاربران بتوانند بهترین
              تصمیم را برای اوقات فراغت و ورزش خود بگیرند. فانیکت نه تنها برای
              کاربران عادی بلکه برای صاحبان و مدیران اماکن ورزشی و تفریحی نیز
              بسیار مفید است. این پلتفرم به مدیران این امکان را می‌دهد تا به
              راحتی برنامه‌ریزی و مدیریت رزروها را انجام دهند، ظرفیت‌ها را
              بهینه‌سازی کنند و با تحلیل داده‌ها، استراتژی‌های بهتری برای جذب
              مشتری اتخاذ نمایند. علاوه بر این، فانیکت امکاناتی نظیر ارائه
              تخفیف‌های ویژه، تبلیغات هدفمند، و ارتباط مستقیم با مشتریان را نیز
              فراهم می‌کند تا تجربه‌ای بی‌نقص و به‌یادماندنی برای هر دو طرف
              ایجاد کند.
            </p>
            <div className=" w-full max-w-[420px] gap-6 flex">
              <a href="https://funicket.ir">
                <PrimaryButton> ورود به فانیکت</PrimaryButton>
              </a>

              <a href="https://manager.funicket.ir">
                <SecondaryButton>ثبت نام مجموعه</SecondaryButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
