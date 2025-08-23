import ReviewLanding from "@/components/ReviewLayout/ReviewLanding";
import FirstPage from "@/components/ReviewLayout/FirstPage";
import SecondPage from "@/components/ReviewLayout/SecondPage";
import ScoreReveal from "@/components/ReviewLayout/ScoreReveal";

export default function Home() {
  return (
    <div>
        <ReviewLanding/>
        <FirstPage/>
        <SecondPage/>
        <ScoreReveal/>
    </div>
  );
}