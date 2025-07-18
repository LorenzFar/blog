export default function LandingHero() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="grid grid-cols-3 items-center w-4/5 h-[80vh]">
        {/* LEFT: Image Grid */}
        <div className="grid col-span-2 grid-rows-8 grid-cols-8 gap-4 w-full h-full">
          <img src="/F1.jpg" className="w-full h-full object-cover row-start-2 row-span-3 col-span-3 rounded-md" />
          <img src="/F1.jpg" className="w-full h-full object-cover col-start-4 row-span-4 col-span-2 rounded-md" />
          <img src="/Sinners.png" className="w-full h-full object-cover row-start-3 col-start-6 row-span-2 col-span-2 rounded-md" />
          <img src="/Sinners.png" className="w-full h-full object-cover row-start-5 col-start-2 row-span-3 col-span-3 rounded-md" />
          <img src="/JWR.jpg" className="w-full h-full object-cover row-start-5 row-span-4 col-span-4 rounded-md" />
        </div>

        {/* RIGHT: Logo */}
        <div className="flex ">
          <img src="/Logo.svg" alt="Your Logo" />
        </div>
      </div>
    </div>
  );
}
