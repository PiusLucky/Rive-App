import { Tomorrow } from "next/font/google";
import React from "react";
import MainButton from "../common/MainButton";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "900"],
});

function HeroSection() {
  const data = {
    top: [
      "/images/pepsi_logo.png",
      "/images/figma_logo.png",
      "/images/google_logo.png",
      "/images/samsung_logo.png",
      "/images/philips_logo.png",
      "/images/whoop_logo.png",
      "/images/duolingo_logo.png",
    ],
    bottom: [
      "/images/sonos_logo.png",
      "/images/tonal_logo.png",
      "/images/adobe_logo.png",
      "/images/atlassian_logo.png",
    ],
  };
  return (
    <section>
      <div className="flex flex-col items-center w-full">
        <div>
          <img src="/images/rive_hero_logo.png" alt="rive logo" />
        </div>
        <div className="my-[30px] flex flex-col items-center">
          <p
            className={`md:text-[40px] text-white uppercase ${tomorrow.className}`}
          >
            Empower designers,
          </p>
          <p
            className={`md:text-[40px] text-white uppercase ${tomorrow.className}`}
          >
            slash dev times
          </p>
        </div>

        <div
          className={`bg-white uppercase text-black px-[8px] py-[4px] text-center font-bold ${tomorrow.className}`}
        >
          Build better products together
        </div>

        <div className="flex flex-col text-[18px] items-center text-white/60 mt-[30px]">
          <p className="text-center">
            With Rive, complex designer-developer&nbsp;
            <span className="underline underline-offset-4">
              handoff is a thing of the past.
            </span>
          </p>
          <p className="text-center">
            Reduce development times by empowering designers to build
          </p>
          <p className="text-center">
            functional graphics with rich interactivity and animation.
          </p>
        </div>
      </div>

      <div className="flex justify-center my-[40px]">
        <MainButton text="Get Started" />
      </div>

      <div>
        <p className="text-center flex flex-col text-[15px] items-center text-white/60 mt-[30px]">
          Companies bring their products and games to life with Rive.
        </p>

        <div className="flex flex-col items-center justify-center ">
          <div className="flex gap-[20px] flex-wrap  mt-[24px]">
            {data.top.map((logo, index) => (
              <img src={logo} alt="partner logo" key={index} />
            ))}
          </div>
          <div className="flex gap-[20px] flex-wrap mt-[24px]">
            {data.bottom.map((logo, index) => (
              <img src={logo} alt="partner logo" key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
