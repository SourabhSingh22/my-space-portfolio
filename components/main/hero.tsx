import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover -z-20 opacity-70"
      >
        <source src="/videos/blackhole1.mp4" type="video/mp4" />
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#030014]/10 via-[#030014]/35 to-[#030014]" />

      <HeroContent />
    </div>
  );
};
