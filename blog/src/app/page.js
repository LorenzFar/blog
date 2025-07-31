import LandingHero from "@/components/LandingSection/LandingHero";
import GamingHero from "@/components/GamingSection/GamingHero";
import ReviewHero from "@/components/ReviewSection/ReviewHero";

export default function Home() {
  return (
    <div>
      <LandingHero />
      <GamingHero />
      <ReviewHero />
    </div>
  );
}