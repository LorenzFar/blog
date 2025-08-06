import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimation } from "motion/react";

import SlideContent from "./SlideContent";

export default function Slideshow() {
    const images = ["/ITT.jpg", "/F4.jpeg", "/Superman.jpg", "JWR.jpg", "F1.jpg"];
    const carousel = useRef(null);
    const [maxDrag, setMaxDrag] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [carouselWidth, setCarouselWidth] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const IMAGE_LIMIT_SLIDESHOW = 0.4;
    const imageWidth = carouselWidth * IMAGE_LIMIT_SLIDESHOW;

    const x = useMotionValue(0);
    const controls = useAnimation();

    useEffect(() => {
        if(!isAnimating){
            updateDragBounds();
        }
    }, [isAnimating]);

    const updateDragBounds = () => {
        if (!carousel.current) return;

        const scrollWidth = carousel.current.scrollWidth;
        const offsetWidth = carousel.current.offsetWidth;
        const RIGHT_PADDING = 40;

        const newMaxDrag = scrollWidth - offsetWidth + RIGHT_PADDING;

        setMaxDrag(newMaxDrag);
        setCarouselWidth(offsetWidth);

        console.log(newMaxDrag);
        console.log(x.get());

        const currentX = x.get();
        if (currentX < -newMaxDrag) {
            controls.start({ 
                x: -newMaxDrag, 
                transition: { type: "tween", duration: 0.3, ease: "easeOut" } 
            });
        }
    };

    return (
        
        <motion.div ref={carousel} className="relative overflow-hidden w-full">

            <motion.div
                drag="x"
                style={{ x }}
                animate={controls}
                dragConstraints={{ left: -maxDrag, right: 0 }}
                className="relative flex pl-6 pr-6"
            >
                
                {images.map((image, index) => {
                    const isSelected = selectedIndex === index;
                    const isBlurred = selectedIndex !== null && !isSelected;

                    return (
                        <motion.div
                            key={index}
                            initial={false}
                            animate={{width: isSelected ? "40vw" : "20vw" }}

                            transition={{ type: "spring", stiffness: 200, damping: 30 }}

                            onAnimationStart={() => setIsAnimating(true)}
                            onAnimationComplete={() => {setIsAnimating(false)}}

                            className="relative flex-shrink-0 px-5 overflow-hidden rounded-lg h-[45vw]"
                            onClick={() => {
                                if (isAnimating) return;
                                setSelectedIndex(isSelected ? null : index);
                            }}
                        >
                            <SlideContent isSelected={ isSelected } slideIndex={index}/>

                            <div
                                className="relative h-full rounded-lg"
                                style={{ width: `${imageWidth}px` }}
                            >

                                <motion.img
                                    layout
                                    src={image}
                                    draggable="false"
                                    className="relative h-full object-cover rounded-lg"
                                    animate={{
                                        filter: `${isBlurred ? "blur(4px)" : "blur(0px)"} ${isSelected ? "brightness(70%)" : "brightness(100%)"}`
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
