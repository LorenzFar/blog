import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, animate } from "motion/react";

export default function GameCarousel({ref}) {
  const images = ["/ITT.jpg", "/F4.jpeg", "/F1.jpg", "JWR.jpg"];
  const carousel = useRef(null);
  const x = useMotionValue(0);
  const imageWidth = useRef(0); 
  const [maxDrag, setMaxDrag] = useState(0);

  // Forward the internal carousel DOM to parent via ref
  useEffect(() => {
    if (ref && typeof ref === "object" && ref.current !== undefined) {
      ref.current = carousel.current;
    }
  }, [ref]);

  useEffect(() => {
    if (carousel.current) {
      imageWidth.current = carousel.current.offsetWidth;
      setMaxDrag(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const snapToClosest = () => {
    const rawX = x.get();
    const snappedIndex = Math.round(-rawX / imageWidth.current);
    const clampIndex = Math.max(0, snappedIndex);
    const targetX = -clampIndex * imageWidth.current;
    animate(x, targetX, { type: "spring", stiffness: 300, damping: 30 });
  };

  return (
    <motion.div ref={carousel} className="overflow-hidden w-full">
      <motion.div
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -maxDrag, right: 0 }}
        onDragEnd={snapToClosest}
        className="flex"
      >
        {images.map((image, index) => (
          <motion.div className="min-w-full" key={index}>
            <img
              className="w-full h-full object-cover  rounded-lg pointer-events-none"
              src={image}
              alt={`Slide ${index}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
