import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Slideshow() {
    const images = ["/ITT.jpg", "/F4.jpeg", "/Superman.jpg", "JWR.jpg", "F1.jpg"];
    const carousel = useRef(null);
    const [maxDrag, setMaxDrag] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [carouselWidth, setCarouselWidth] = useState(0);

    const IMAGE_LIMIT_SLIDESHOW = 0.4;
    const imageWidth = carouselWidth * IMAGE_LIMIT_SLIDESHOW;

    useEffect(() => {
        if (carousel.current) {
            const scrollWidth = carousel.current.scrollWidth;
            const offsetWidth = carousel.current.offsetWidth;
            const RIGHT_PADDING = 40;
            setMaxDrag(scrollWidth - offsetWidth + RIGHT_PADDING);

            setCarouselWidth(offsetWidth);
        }
    }, []);

    return (
        
        <motion.div ref={carousel} className="relative overflow-hidden w-full">

            <motion.div
                drag="x"
                dragConstraints={{ left: -maxDrag, right: 0 }}
                className="relative flex pl-6 pr-6"
            >
                
                {images.map((image, index) => {
                    const isSelected = selectedIndex === index;
                    const isBlurred = selectedIndex !== null && !isSelected;

                    return (
                        <motion.div
                            key={index}
                            layout
                            transition={{ type: "spring", stiffness: 200, damping: 30 }}
                            className={`relative flex-shrink-0 px-5 overflow-hidden rounded-lg ${
                                isSelected ? "z-50 w-[40vw]" : "w-[20vw]"
                            } h-[45vw]`}
                            onClick={() => {
                                if (isSelected) return setSelectedIndex(null);
                                setSelectedIndex(index);
                            }}
                        >
                            <div
                                className="relative h-full rounded-lg"
                                style={{ width: `${imageWidth}px` }}
                            >
                                <motion.img
                                    layout
                                    src={image}
                                    alt={`Slide ${index}`}
                                    draggable="false"
                                    className="relative h-full object-cover rounded-lg"
                                    animate={{
                                        filter: isBlurred ? "blur(4px)" : "blur(0px)",
                                    }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
}
