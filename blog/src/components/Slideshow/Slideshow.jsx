import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

export default function Slideshow() {
    const images = ["/ITT.jpg", "/F4.jpeg", "/Superman.jpg", "JWR.jpg", "F1.jpg"];
    const carousel = useRef(null);
    const [maxDrag, setMaxDrag] = useState(0);

    useEffect(() => {
        if (carousel.current) {
            const scrollWidth = carousel.current.scrollWidth;
            const offsetWidth = carousel.current.offsetWidth;

            // Tailwind `pr-6` = 1.5rem = 24px
            const RIGHT_PADDING = 24;

            setMaxDrag(scrollWidth - offsetWidth + RIGHT_PADDING);
        }
    }, []);

    return (
        <motion.div
            ref={carousel}
            className="overflow-hidden w-full"
        >
            <motion.div
                drag="x"
                dragConstraints={{ left: -maxDrag, right: 0 }}
                className="flex pl-6 pr-6" // Padding on left and right
            >
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="flex-shrink-0 w-[20vw] h-[45vw] px-3"
                    >
                        <motion.img
                            src={image}
                            alt={`Slide ${index}`}
                            draggable="false"
                            className="w-full h-full object-cover rounded-lg cursor-pointer"
                            
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}
