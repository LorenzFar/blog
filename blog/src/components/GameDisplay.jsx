"use client"

import {motion, useScroll, useTransform} from "motion/react"
import { useRef } from "react"

export default function GameDisplay() {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.03]);

  return (
    <div className="relative inline-block">
      {/* Glow behind image */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[60vw] h-[37.5vw] bg-radial from-purple-500/50 to-transparent blur-3xl" />

      {/* Scroll-scaling image */}
      <motion.img
        ref={imageRef}
        src="/ITT.jpg"
        style={{ scale }}
        className="rounded-lg"
        alt="Game Image"
      />
    </div>
  );
}