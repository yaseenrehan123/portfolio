import IntroSection from "@/features/intro-section/introSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center flex-col gap-3">
      <IntroSection />
    </div>
  );
}
