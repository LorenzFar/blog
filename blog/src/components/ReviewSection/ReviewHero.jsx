"use client";

import { motion, AnimatePresence } from "motion/react";
import Slideshow from "../Slideshow/Slideshow";

export default function ReviewHero(){
    return (
        <div
            className="h-screen flex items-center"
        >
            <Slideshow/>
        </div>
    );
}