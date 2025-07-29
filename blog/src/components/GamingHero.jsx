"use client";

import GameContent from "./GameContent";
import GameCarousel from "./GameCarousel";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";

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

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let timeout;

    if (isImageInView) {
      timeout = setTimeout(() => {
        setShowContent(true);
      }, 1000);
    } else {
      setShowContent(false);
      clearTimeout(timeout);
    }

    return () => clearTimeout(timeout);
  }, [isImageInView]);

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

        {/* Gaming Content */}
        <div className="relative">

          <GameCarousel ref={imageRef}/>

          {/* Overlay (Grid Content on top of image) */}
          {showContent && (
            <motion.div
              key="game-content"
              className="absolute inset-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              <GameContent />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-35 rounded-lg" />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
