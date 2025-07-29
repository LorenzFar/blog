import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import GameContent from "./GameContent"; // Can be dynamic based on `index`

export default function GameOverlay({ isActive, index }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timeout;
    if (isActive) {
      timeout = setTimeout(() => setShow(true), 1000);
    } else {
      setShow(false);
      clearTimeout(timeout);
    }
    return () => clearTimeout(timeout);
  }, [isActive]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >

          <GameContent slideIndex={index} />

          <div className="absolute inset-0 bg-black/30 rounded-lg" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
