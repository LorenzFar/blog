"use client"

import {motion, useScroll, useTransform} from "motion/react"
import { useRef } from "react"

export default function LandingHero() {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7], { clamp: true });

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div 
        ref={imageRef}
        style={{ scale }}
        className="relative inline-block"
      >
        {/* Glow behind image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[110vw] h-[60vw] blur-3xl bg-radial from-purple-500/50 to-transparent"/>

        <div className="relative">
          <motion.img
            ref={imageRef}
            src="/ITT.jpg"

            className="rounded-lg"
            alt="Game Image"
          />

          <img
            src="/ITTlogo.png"
            className="absolute w-1/4 z-50 -translate-y-1/2"
            style={{ top: '50%', left: '20vw' }}
            alt="Logo"
          />

          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-50 rounded-lg"/>

          <div
            className="grid grid-rows-2 absolute z-50 text-white font-black place-items-center"
            style={{ top: '40%', right: '15vw' }}
          >
            <p className="text-[2.3vw] max-w-sm leading-snug">
              "Embark on the craziest journey of your life"
            </p>

            <div className="liquidGlass-wrapper button">
              <div className="liquidGlass-effect"/>
              <div className="liquidGlass-tint"/>
              <div className="liquidGlass-shine"/>
              <div className="liquidGlass-text button-text">
                Learn More
              </div>
            </div>
            
          </div>
        </div>

      </motion.div>
    </div>
  );
}

