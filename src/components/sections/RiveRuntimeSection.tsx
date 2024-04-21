import React from "react";
import MainButton from "../common/MainButton";

function RiveRuntimeSection() {
  const data = {
    top: [
      { url: "/images/js.png", title: "Web" },
      { url: "/images/ios.png", title: "iOS" },
      { url: "/images/macos_logo.png", title: "macOS" },
      { url: "/images/android_logo.png", title: "Android" },
      { url: "/images/window_logo.png", title: "Windows" },
      { url: "/images/flutter_logo.png", title: "Flutter" },
    ],

    middle: [
      { url: "/images/react_logo.png", title: "React" },
      { url: "/images/react_native_logo.png", title: "React Native" },
      { url: "/images/rust_logo.png", title: "Rust" },
      { url: "/images/c_logo.png", title: "C++" },
      { url: "/images/defold_logo.png", title: "Defold" },
    ],
    bottom: [
      { url: "/images/tizen_logo.png", title: "Tizen" },
      { url: "/images/unity_logo.png", title: "Unity" },
      { url: "/images/unreal_logo.png", title: "Unreal" },
      { url: "/images/framer.png", title: "Framer" },
    ],
  };
  return (
    <section className="dark-rr101 flex flex-col md:flex-row gap-8 justify-around items-center px-4 py-[60px]">
      <div className="md:ml-[70px] max-w-[610px]">
        <div className="flex gap-4">
          {data.top.map((logo, index) => (
            <div className="flex flex-col gap-4 items-center" key={index}>
              <div>
                <img src={logo.url} alt="runtime logo" />
              </div>
              <p className="text-white/60 font-medium text-[13px]">
                {logo.title}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-5">
          {data.middle.map((logo, index) => (
            <div className="flex flex-col gap-4 items-center" key={index}>
              <div>
                <img src={logo.url} alt="runtime logo" />
              </div>
              <p className="text-white/60 font-medium text-[13px]">
                {logo.title}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-4  mt-5">
          {data.bottom.map((logo, index) => (
            <div className="flex flex-col gap-4 items-center" key={index}>
              <div>
                <img src={logo.url} alt="runtime logo" />
              </div>
              <p className="text-white/60 font-medium text-[13px]">
                {logo.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-[9px] md:ml-[220px] max-w-[610px]">
          <div className="flex gap-2 items-center">
            <div>
              <img src="/images/code.png" alt="roive editor icon" />
            </div>
            <p className="font-bold text-[22px] text-dark-rr101">
              Rive Runtimes
            </p>
          </div>

          <p className="text-[28px] font-bold text-white">
            Rive runs anywhere with our open- source runtimes
          </p>

          <p className="text-white/60 mb-5">
            No code or full code, you choose. Easily embed interactive
            animations or manipulate everything with code — Rive empowers you to
            work the way you want.
          </p>

          <MainButton
            text="Learn more"
            classes="dark-rr102"
            rightIconRoute="/images/icon_right.png"
            rightIconClass="w-5"
          />
        </div>
      </div>
    </section>
  );
}

export default RiveRuntimeSection;
