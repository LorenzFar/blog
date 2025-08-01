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
        <div className="relative w-full z-40">
            {/* 🔲 Fullscreen Overlay Inside the Carousel */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 z-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedIndex(null)}
                    />
                )}
            </AnimatePresence>

            <motion.div ref={carousel} className="relative overflow-hidden w-full">
                <motion.div
                    drag="x"
                    dragConstraints={{ left: -maxDrag, right: 0 }}
                    className="flex pl-6 pr-6"
                >
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            layout
                            transition={{ type: "spring", stiffness: 200, damping: 30 }}
                            
                            className={`flex-shrink-0 px-5 cursor-pointer overflow-hidden rounded-lg ${
                                selectedIndex === index ? "z-50 w-[40vw]" : "w-[20vw]"
                            } h-[45vw]`}

                            style={{ zIndex: selectedIndex === index ? 50 : 10, position: "relative" }}
                            onClick={() => {
                                if (selectedIndex === index) return setSelectedIndex(null);
                                setSelectedIndex(index);
                            }}
                        >
                            <div
                                className="h-full rounded-lg"
                                style={{ width: `${imageWidth}px` }}
                            >
                                <motion.img
                                    layout
                                    src={image}
                                    alt={`Slide ${index}`}
                                    draggable="false"
                                    className="h-full object-cover rounded-lg"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
