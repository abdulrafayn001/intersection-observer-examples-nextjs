import AnalyticsElement from "@/components/AnalyticsElement";
import AnimatedElement from "@/components/AnimatedElement";
import VideoPlayer from "@/components/VideoPlayer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <VideoPlayer />
      <AnimatedElement />
      <AnalyticsElement />
    </main>
  );
}
