"use client";

import GameContent from "./GameContent";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "motion/react";
import { useRef } from "react";

export default function LandingHero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  
  const isImageInView = useInView(containerRef, {
    amount: 1, 
  });

  const { scrollYProgress } = useScroll({
    target: imageRef,
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
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[110vw] h-[60vw] blur-3xl bg-radial from-purple-500/50 to-transparent"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>

        {/* Image Block */}
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
            style={{ top: "50%", left: "20vw" }}
            alt="Logo"
          />

          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-50 rounded-lg" />

          <GameContent />
        </div>
      </motion.div>
    </div>
  );
}
