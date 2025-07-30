"use client";

import GameCarousel from "../Carousel/GameCarousel";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "motion/react";
import { useRef } from "react";

export default function LandingHero() {
  const containerRef = useRef(null);
  
  const isImageInView = useInView(containerRef, {
    amount: 1, 
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7], { clamp: true });

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        ref={containerRef}
        style={{ scale }}
        className="relative inline-block"
      >
        {/* Glow Effect */}
        <AnimatePresence>
          {isImageInView && (
            <motion.div
              key="glow"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[110vw] h-[70vw] blur-3xl bg-radial from-purple-500/50 to-transparent"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>

        {/* Gaming Content */}
        <GameCarousel isImageInView={isImageInView}/>

      </motion.div>
    </div>
  );
}
