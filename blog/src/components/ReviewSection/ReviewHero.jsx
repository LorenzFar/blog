"use client";

import Slideshow from "../Slideshow/Slideshow";

export default function ReviewHero() {
  return (
    <div className="h-screen flex flex-col justify-center px-6">

      <p className="text-white font-black text-[2vw] mb-4 px-12">
        Recent Review
      </p>

      <div className="flex justify-center">
        <Slideshow />
      </div>
    </div>
  );
}
