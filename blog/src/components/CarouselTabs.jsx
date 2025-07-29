import { motion } from "motion/react";

export default function CarouselTabs({ imagesLength, activeIndex }) {
  return (
    <motion.ul className="flex gap-2 justify-center mt-4">
      {Array.from({ length: imagesLength }).map((_, i) => (
        <li
          key={i}
          className={`h-2 rounded-full transition-all duration-300 ${
            i === activeIndex ? "w-6 bg-white" : "w-2 bg-gray-400"
          }`}
        />
      ))}
    </motion.ul>
  );
}
