"use client"

import { useRef } from "react";
import { useInView } from "motion/react";
import ImageHero from "@/components/ImageHero.jsx";
import Logo from "@/components/Logo.jsx";

export default function LandingHero() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef);

  return (
    <div className="grid min-h-screen place-items-center">
        <div ref={heroRef} className=" w-2/3 grid grid-rows-8 grid-cols-13 gap-4">
          <ImageHero
            title="SINNERS"
            imageURL="/Sinners.png"
            className="row-start-2 row-span-3 col-span-4"
          />

          <ImageHero
            title="F1: THE MOVIE"
            imageURL="/F1.jpg"
            className="col-start-5 row-span-4 col-span-3"
          />

          <ImageHero
            title="FANTASTIC 4"
            imageURL="/F4.jpeg"
            className="row-start-3 col-start-8 row-span-2 col-span-3"
          />

          <ImageHero
            title="SUPERMAN"
            imageURL="/Superman.jpg"
            className="row-start-5 col-start-2 row-span-3 col-span-6"
          />

          <ImageHero
            title="JURASSIC WORLD: REBIRTH"
            imageURL="/JWR.jpg"
            className="row-start-5 row-span-4 col-span-5"
          />

          {/* Logo (no overlay) */}
          <Logo isHeroInView={isHeroInView}/>
        </div>
    </div>
  );
}
