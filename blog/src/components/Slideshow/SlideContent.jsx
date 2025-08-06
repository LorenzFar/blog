import { motion } from "motion/react";

export default function SlideContent({ isSelected, slideIndex }) {
    const logo = ["/ITTLogo.png", "/F4Logo.png", "/SupermanLogo.png", "JWRLogo.webp", "F1Logo.webp"];
    if (!isSelected) return null;

    return (
        <>
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.img
                    className="w-[40%] h-auto"
                    src={logo[slideIndex]}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </div>

            <motion.div 
                className="absolute bottom-10 left-15 z-10 text-shadow-md"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >   
                <p className="text-white font-black text-[2.5vw]">Superman (2025)</p>
                <p className="text-white font-black text-[1.5vw]">Directed By.</p>
                <p className="text-white text-[1vw]">James Gunn</p>
            </motion.div>
        </>
    );
}
