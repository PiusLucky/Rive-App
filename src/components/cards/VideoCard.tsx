"use client";

import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface IProps {
  videoUrl: string;
  title: string;
  buttonsOnly: boolean;
}

function VideoCard({ videoUrl, title, buttonsOnly }: IProps) {
  return !buttonsOnly ? (
    <div>
      <div className="wrapper h-[214px] bg-black rounded-[20px]">
        <ReactPlayer
          className="player"
          width="100%"
          height="100%"
          url={videoUrl}
          playing={true}
          muted={true}
          loop={true}
        />
      </div>
      <p className="text-lightGray text-center mt-[15px]">{title}</p>
    </div>
  ) : (
    <div className="flex flex-col gap-4">
      <div className="h-[101px] bg-[#333333] flex justify-center items-center border border-customGray rounded-[20px]">
        <div className="flex gap-2 items-center">
          <img src="/images/ring.png" alt="ring" />
          <p className="font-semibold text-[16px] text-[#F1F1F1]">Use Cases</p>
        </div>
      </div>

      <div className="h-[101px] bg-[#333333] flex justify-center items-center border border-customGray rounded-[20px]">
        <div className="flex gap-2 items-center">
          <img src="/images/star.png" alt="star" />
          <p className="font-semibold text-[16px] text-[#F1F1F1]">Features</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
