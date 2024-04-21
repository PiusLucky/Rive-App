import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import RiveEditorSection from "@/components/sections/RiveEditorSection";
import RiveRendererSection from "@/components/sections/RiveRendererSection";
import RiveRuntimeSection from "@/components/sections/RiveRuntimeSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import VideoCardSection from "@/components/sections/VideoCardSection";

export default function Home() {
  return (
    <main className="bg-[#111111]">
      <NavBar />
      <div className="w-full px-4  pt-32 md:pt-[100px]">
        <HeroSection />
        <VideoCardSection />
        <RiveEditorSection />
        <RiveRuntimeSection />
        <RiveRendererSection />
      </div>
      <div className="px-4 md:px-[13rem]">
        <TestimonialSection />
        <NewsletterSection />
        <FooterSection />
      </div>
    </main>
  );
}
