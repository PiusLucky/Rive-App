import React from "react";
import MainButton from "../common/MainButton";

function RiveRendererSection() {
  return (
    <section className="dark-rrender101  flex flex-col md:flex-row gap-8 justify-between items-center px-4 py-[30px]">
      <div className="flex flex-col gap-[9px] md:ml-[220px] max-w-[610px]">
        <div className="flex gap-2 items-center">
          <div className="w-8 h-5 green-gradient rounded-sm"></div>
          <p className="font-bold text-[22px] text-green-gradient">
            Rive Renderer
          </p>
        </div>

        <p className="text-[28px] font-bold text-white">
          A major breakthrough in real- time vector graphics
        </p>

        <p className="text-white/60 mb-5">
          The Rive Renderer can draw an unprecedented amount of vectors on
          screen. Everything on the screen animates at 120 fps with perfect
          quality.
        </p>

        <MainButton
          text="Learn more"
          classes="green-gradient"
          rightIconRoute="/images/icon_right.png"
          rightIconClass="w-5"
        />
      </div>

      <div>
        <img src="/images/robots_2.png" alt="robot" />
      </div>
    </section>
  );
}

export default RiveRendererSection;
