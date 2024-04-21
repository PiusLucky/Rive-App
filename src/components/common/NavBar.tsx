"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import TopBannerSection from "../sections/TopBannerSection";
import MainButton from "./MainButton";
import { Menu } from "lucide-react";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 ">
      {/* DESKTOP */}
      <TopBannerSection />
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-[#1D1D1D] p-4">
        <div className="flex justify-between mx-[41px] items-center">
          <div></div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            <div>
              <img src="/images/logo.png" alt="logo" />
            </div>
            <div
              className={`hover:text-primary cursor-pointer flex items-center  font-[500] text-customGray`}
            >
              <p>Products</p>
              <ChevronDown size={22} />
            </div>
            <div
              className={`hover:text-primary cursor-pointer flex items-center  font-[500] text-customGray`}
            >
              Community
              <ChevronDown size={22} />
            </div>

            <div
              className={`hover:text-primary cursor-pointer flex items-center  font-[500] text-customGray`}
            >
              Learn
              <ChevronDown size={22} />
            </div>

            <div
              className={`hover:text-primary cursor-pointer flex items-center  font-[500] text-customGray`}
            >
              Pricing
            </div>

            <div
              className={`hover:text-primary cursor-pointer flex items-center  font-[500] text-customGray`}
            >
              Downloads
            </div>
          </div>
          <div className="flex items-center gap-[40px] select-none">
            <MainButton text="Get Started" />
          </div>
        </div>
      </div>
      {/* MOBILE */}

      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-[#1D1D1D]  animate-in fade-in zoom-in  ${
          menu ? " bg-gray" : ""
        } `}
      >
        <TopBannerSection />
        <div className="flex justify-between mx-[10px] py-4">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img src="/images/logo.png" alt="logo" className="" />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                color="#fff"
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <Menu
                color="#fff"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              <div
                className={`hover:text-primary cursor-pointer flex items-center  font-[500] text-customGray`}
              >
                <p>Products</p>
                <ChevronDown size={22} />
              </div>
              <div
                className={`hover:text-primary cursor-pointer flex items-center  font-[500] text-customGray`}
              >
                Community
                <ChevronDown size={22} />
              </div>

              <div
                className={`hover:text-primary cursor-pointer flex items-center  font-[500] text-customGray`}
              >
                Learn
                <ChevronDown size={22} />
              </div>

              <div
                className={`hover:text-primary cursor-pointer flex items-center  font-[500] text-customGray`}
              >
                Pricing
              </div>

              <div
                className={`hover:text-primary cursor-pointer flex items-center  font-[500] text-customGray`}
              >
                Downloads
              </div>
              <div className="flex flex-col gap-[40px] select-none">
                <MainButton text="Get Started" />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
