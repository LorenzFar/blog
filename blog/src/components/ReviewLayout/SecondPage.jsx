"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function SecondPage() {
  const containerRef = useRef(null);
  const isImageInView = useInView(containerRef, { 
    amount: 0.7, 
    once: true
});

  return (
    <div ref={containerRef} className="h-screen relative grid grid-cols-2 overflow-hidden items-center">

        <div className="flex items-center justify-center">
            <motion.img
                src="JWR3.jpg"
                className="rounded-full object-cover w-[90%] aspect-square"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isImageInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ type: "spring", stiffness: 40, damping: 25 }}
                />
        </div>

        <div className="h-full grid grid-cols-5 grid-rows-7 px-5">

            <div className="row-start-2 row-span-4 col-span-5 flex items-end justify-center">
                <p className="text-white font-bold text-[1.8vw]">
                    The Jurassic franchise has always felt scary to me, ever since Steven Spielberg's unforgettable T-Rex scene in the original. When I saw the trailer for this new film, I was really hoping it would bring back that same sense of fear, especially after the less impressive sequels. In some moments, it actually did. There were scenes that captured that old tension. But then, that feeling would disappear just as quickly—like when a boat somehow stays afloat after being chomped by a giant T-Rex. Moments like that take you out of it and make the dinosaurs feel a little less scary than they should be
                </p>
            </div>

            <div className="row-start-6 col-span-5 flex items-center">
                <p className="text-white font-black text-[3.7vw] leading-tight">
                    "That Feeling"
                </p>
            </div>

      </div>

    </div>
  );
}
