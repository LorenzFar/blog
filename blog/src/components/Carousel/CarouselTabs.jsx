import { motion } from "motion/react";

export default function CarouselTabs({ imagesLength, activeIndex }) {
  return (
    <motion.ul className="flex gap-3 justify-center mt-4">
      {Array.from({ length: imagesLength }).map((_, i) => (
        <li
          key={i}
          className={`rounded-full transition-all duration-300 ${
            i === activeIndex ? "w-10 h-2 bg-white" : "w-2 h-2 bg-gray-400"
          }`}
        />
      ))}
    </motion.ul>
  );
}
