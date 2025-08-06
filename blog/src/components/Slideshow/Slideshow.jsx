import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimation } from "motion/react";

import SlideContent from "./SlideContent";

export default function Slideshow() {
    const images = ["/ITT.jpg", "/F4.jpeg", "/Superman.jpg", "JWR.jpg", "F1.jpg"];
    const carousel = useRef(null);
    const baseRef = useRef(null); //For precalculation of drag limit
    const [maxDrag, setMaxDrag] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [carouselWidth, setCarouselWidth] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const IMAGE_LIMIT_SLIDESHOW = 0.4;
    const imageWidth = carouselWidth * IMAGE_LIMIT_SLIDESHOW;

    const x = useMotionValue(0);
    const controls = useAnimation();

    useEffect(() => {
        // only measure once, when fully collapsed
        if (baseRef.current === null && selectedIndex === null && carousel.current) {
            const base = carousel.current.scrollWidth - carousel.current.offsetWidth + 40;
            setCarouselWidth(carousel.current.offsetWidth);
            baseRef.current = base;
        }

        const vw = window.innerWidth / 100;
        const extraOffset = 20 * vw;
        const newMaxDrag = selectedIndex !== null
            ? baseRef.current + extraOffset
            : baseRef.current;

        const currX = x.get();
        if(currX < -newMaxDrag){
            controls.start({ 
                x: -newMaxDrag, 
                transition: { type: "tween", duration: 0.3, ease: "easeOut" } 
            });
        }
        else if(currX > 0){
            controls.start({ 
                x: 0, 
                transition: { type: "tween", duration: 0.3, ease: "easeOut" } 
            });
        }

        setMaxDrag(newMaxDrag);
    }, [selectedIndex]);

    return (
        
        <motion.div className="relative overflow-hidden w-full">

            <motion.div
                ref={carousel}
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
