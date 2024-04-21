import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface IProps {
  avatarUrl: string;
  realname: string;
  username: string;
  comment: string;
}

function TestimonialCard({ avatarUrl, realname, username, comment }: IProps) {
  return (
    <div className="bg-cardBg gap-4 p-[20px] rounded-[16px]">
      <div className="flex gap-4">
        <div className="">
          <Avatar>
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <p className="text-white font-[14px]">
            {realname}&nbsp;
            <span className="text-white/50">{username}</span>
          </p>
          <p className="mt-[11px] text-[#F1F1F1]">{comment}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
