
import GameOverlay from "./GameOverlay";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import CarouselTabs from "./CarouselTabs";


export default function GameCarousel( {isImageInView} ) {
  const images = ["/ITT.jpg", "/F4.jpeg", "/Superman.jpg", "JWR.jpg"];
  const carousel = useRef(null);
  const x = useMotionValue(0);
  const imageWidth = useRef(0); 
  const [maxDrag, setMaxDrag] = useState(0);

  //Keep Track of visible slide
  const [activeIndex, setActiveIndex] = useState(0);

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
    setActiveIndex(clampIndex); //Set Active index of center slide
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
          <motion.div className="relative min-w-full" key={index}>
            <img
              className="w-full h-full object-cover rounded-lg pointer-events-none"
              src={image}
              alt={`Slide ${index}`}
            />

            <GameOverlay isActive={index === activeIndex} index={index} />
          </motion.div>
        ))}
      </motion.div>
      
      <CarouselTabs imagesLength={images.length} activeIndex={activeIndex}/>
    </motion.div>
  );
}
