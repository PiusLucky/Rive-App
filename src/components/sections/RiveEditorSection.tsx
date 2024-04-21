import React from "react";
import MainButton from "../common/MainButton";

function RiveEditorSection() {
  return (
    <section className="dark-rw101 flex flex-col md:flex-row gap-8 justify-between items-center px-4 py-[30px]">
      <div className="flex flex-col gap-[9px] md:ml-[220px] max-w-[610px]">
        <div className="flex gap-2 items-center">
          <div>
            <img src="/images/rive_editor.png" alt="roive editor icon" />
          </div>
          <p className="font-bold text-[22px] text-partial-pink-gradient">
            Rive Editor
          </p>
        </div>

        <p className="text-[28px] font-bold text-white">
          The design tool that creates functional graphics
        </p>

        <p className="text-white/60 mb-5">
          Use Rive's familiar design and animation tools with our
          ground-breaking State Machine to create interactive content for your
          products, apps, sites, and games.
        </p>

        <MainButton
          text="Learn more"
          classes="partial-pink-gradient"
          rightIconRoute="/images/icon_right.png"
          rightIconClass="w-5"
        />
      </div>

      <div>
        <img src="/images/robots.png" alt="robot" />
      </div>
    </section>
  );
}

export default RiveEditorSection;
