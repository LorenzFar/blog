"use client";
import { motion } from "framer-motion";

export default function Logo({ isHeroInView }) {
  if (isHeroInView === null || isHeroInView === undefined) {
    return null;
  }

  return (
    <>
      {/* Hero-section logo */}
      {isHeroInView && (
        <motion.img
          src="/Logo.svg"
          alt="Your Logo"
          className="row-start-4 col-start-11 col-span-3 "
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      )}

      {/* Fixed corner logo */}
      {!isHeroInView && (
        <motion.img
          src="/Logo.svg"
          alt="Your Logo"
          className="fixed w-30 top-5 left-5 z-50"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      )}
    </>
  );
}
