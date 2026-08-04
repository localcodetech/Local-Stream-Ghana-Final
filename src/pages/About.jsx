import CoreVolume from "@/sections/about/CoreVolume";
import MissionVision from "@/sections/about/missionvision";
import TechnicalPriciple from "@/sections/about/TechnicalPrinciple";

const AboutPage = () => {
  return (
    <main className="min-h-dvh bg-background">
    <title></title>

      <MissionVision />
      <TechnicalPriciple />
      <CoreVolume />

    </main>
  );
};

export default AboutPage;