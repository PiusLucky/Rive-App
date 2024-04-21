import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

function FooterSection() {
  const data = {
    product: ["Editor", "Runtimes", "Renderer", "Changelog"],
    community: ["Rive Community", "Discord", "Get Support", "Experts"],
    learn: ["Documentation", "Blog", "Features"],
    company: ["Careers", "Terms", "Privacy"],
    useCases: ["Game UI", "Runtime", "Product design", "Rive vs Lottie"],
  };

  const socialLinks = [
    "/images/youtube_icon.png",
    "images/twitter_icon.png",
    "images/instagram_icon.png",
    "images/github_icon.png",
    "images/dribble_icon.png",
    "images/discord_icon.png",
  ];
  return (
    <section className="bg-[#111111]  pb-[60px]">
      <div className="py-[60px]">
        <Separator className="border border-[#222222]" />
      </div>

      <div className="flex flex-col gap-16 md:flex-row justify-between">
        <div>
          <p className="text-[#4c4b4b] text-[16px] font-bold">Product</p>
          <div className="flex flex-col gap-4 mt-4">
            {data.product.map((link, index) => (
              <Link
                href="/"
                key={index}
                className="text-customGray font-semibold underline underline-offset-4"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#4c4b4b] text-[16px] font-bold">Community</p>
          <div className="flex flex-col gap-4 mt-4">
            {data.community.map((link, index) => (
              <Link
                href="/"
                key={index}
                className="text-customGray font-semibold underline underline-offset-4"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#4c4b4b] text-[16px] font-bold">Learn</p>
          <div className="flex flex-col gap-4 mt-4">
            {data.learn.map((link, index) => (
              <Link
                href="/"
                key={index}
                className="text-customGray font-semibold underline underline-offset-4"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#4c4b4b] text-[16px] font-bold">Company</p>
          <div className="flex flex-col gap-4 mt-4">
            {data.company.map((link, index) => (
              <Link
                href="/"
                key={index}
                className="text-customGray font-semibold underline underline-offset-4"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#4c4b4b] text-[16px] font-bold">Use Cases</p>
          <div className="flex flex-col gap-4 mt-4">
            {data.useCases.map((link, index) => (
              <Link
                href="/"
                key={index}
                className="text-customGray font-semibold underline underline-offset-4"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="py-[60px]">
        <Separator className="border border-[#222222]" />
      </div>

      <div className="flex md:justify-between flex-col gap-8 md:flex-row md:items-center">
        <div>
          <div>
            <img src="/images/footer_logo.png" alt="footer logo" />
          </div>
          <p className="my-[20px] text-customGray font-semibold">
            © 2024 Rive, Inc. All rights reserved.
          </p>
          <p className="text-[#4c4b4b]  font-semibold">
            All trademarks, logos, and brand names are the property of their
            respective owners.
          </p>
        </div>
        <div className="flex  gap-4">
          {socialLinks.map((link, index) => (
            <div key={index}>
              <img src={link} alt="social link" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
