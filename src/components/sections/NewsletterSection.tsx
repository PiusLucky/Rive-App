import React from "react";
import { Input } from "@/components/ui/input";
import MainButton from "../common/MainButton";

function NewsletterSection() {
  return (
    <section className="bg-[#111111] ">
      <div className="flex flex-col items-center justify-center py-32">
        <p className="text-[22px] font-bold text-white mb-4 text-center">
          Start building beautiful interactive graphics
        </p>
        <MainButton
          text="Get Started"
          classes="bg-white text-[#A82481] font-bold hover:bg-white"
        />
      </div>

      <div className="w-full flex flex-col md:flex-row gap-16 items-center">
        <div>
          <p className="text-[22px] font-bold text-white">
            Join our newsletter
          </p>
          <p className="text-white/60 text-[18px]">
            Get all the latest Rive news delivered to your inbox.
          </p>
        </div>
        <div className="flex flex-grow gap-2">
          <Input placeholder="email@rive.app" />
          <MainButton
            text="Sign Up"
            classes="bg-white/10 w-[90px] rounded-[8px] text-white font-bold"
          />
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
