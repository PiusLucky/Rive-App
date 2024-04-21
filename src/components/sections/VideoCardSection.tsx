import React from "react";
import VideoCard from "../cards/VideoCard";

function VideoCardSection() {
  const data = [
    {
      videoUrl: "/videos/joel_home.mp4",
      title: "Build interactive 2D characters,  props, and UI for games",
      buttonsOnly: false,
    },
    {
      videoUrl: "/videos/ui_games.mp4",
      title: "Create highly animated menus with dynamic text",
      buttonsOnly: false,
    },
    {
      videoUrl: "/videos/brands.mp4",
      title: "Bring brands to life with animated  hero moments",
      buttonsOnly: false,
    },
    {
      videoUrl: "/videos/ui_components.mp4",
      title: "Build animated UI components that are ready to ship",
      buttonsOnly: false,
    },
    {
      videoUrl: "/videos/data_usecase.mp4",
      title: "Create interactive graphics that react to input and data",
      buttonsOnly: false,
    },
    {
      videoUrl: "",
      title: "",
      buttonsOnly: true,
    },
  ];
  return (
    <section className="flex justify-center mt-[84px] pb-[61px]">
      <div className="max-w-[1000px]">
        <div className="grid gap-[30px] grid-cols-1 md:grid-cols-3 justify-around ">
          {data.map((video, index) => (
            <VideoCard {...video} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoCardSection;
