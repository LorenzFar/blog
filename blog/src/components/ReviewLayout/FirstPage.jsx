"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function FirstPage() {
  const containerRef = useRef(null);
  const isImageInView = useInView(containerRef, { 
    amount: 0.7, 
    once: true
});

  return (
    <div ref={containerRef} className="h-screen relative overflow-hidden">

      <motion.img
        src="JWR2.jpg"
        className="object-cover h-full absolute top-0"
        initial={{ width: "100%", left: 0 }}
        animate={
          isImageInView
            ? { width: "45%", left: "auto", right: 0 }
            : { width: "100%", left: 0, right: "auto" }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <div className="w-[55%] h-full grid grid-cols-7 grid-rows-7">
        <div className="row-span-2 col-span-6 flex items-center justify-center">
            <p className="text-white font-black text-[3.8vw]">
                "Hilariously Haunting"
            </p>
        </div>

        <div className="row-span-4 col-span-7 flex justify-center px-5">
            <p className="text-white font-bold text-[1.8vw]">
                The Jurassic franchise has always felt scary to me, ever since Steven Spielberg's unforgettable T-Rex scene in the original. When I saw the trailer for this new film, I was really hoping it would bring back that same sense of fear, especially after the less impressive sequels. In some moments, it actually did. There were scenes that captured that old tension. But then, that feeling would disappear just as quickly—like when a boat somehow stays afloat after being chomped by a giant T-Rex. Moments like that take you out of it and make the dinosaurs feel a little less scary than they should be
            </p>
        </div>
        <div className="col-start-4 col-span-4 flex flex-col items-end px-5">
            <p className="text-white font-black text-[3vw]">
                DIRECTED BY. 
            </p>
            <p className="text-white text-[1.5vw]">
                Gareth Williams
            </p>
        </div>

      </div>

    </div>
  );
}
