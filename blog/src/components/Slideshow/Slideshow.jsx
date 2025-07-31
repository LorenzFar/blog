import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

export default function Slideshow() {
  const images = ["/ITT.jpg", "/F4.jpeg", "/Superman.jpg", "JWR.jpg"];
  const carousel = useRef(null);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      setMaxDrag(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="overflow-hidden w-full px-8 py-10 "
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: -maxDrag , right: 0 }}
        className="flex gap-6"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="w-[25vw] h-[50vw] flex-shrink-0  shadow-md"
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-lg pointer-events-none"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
