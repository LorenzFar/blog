export default function LandingHero() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="w-3/6">

         <div className="grid grid-rows-8 grid-cols-12 gap-4">
          {/* LEFT: Image */}
          <img src="/Sinners.png" className="w-full h-full object-cover row-start-2 row-span-3 col-span-4 rounded-md" />
          <img src="/F1.jpg" className="w-full h-full object-cover col-start-5 row-span-4 col-span-2 rounded-md" />
          <img src="/F4.jpeg" className="w-full h-full object-cover row-start-3 col-start-7 row-span-2 col-span-3 rounded-md" />
          <img src="/Superman.jpeg" className="w-full h-full object-cover row-start-5 col-start-2 row-span-3 col-span-6 rounded-md" />
          <img src="/JWR.jpg" className="w-full h-full object-cover row-start-5 row-span-4 col-span-4 rounded-md" />

          {/* Right: Logo */}
          <img src="/Logo.svg" alt="Your Logo" className="w-full h-full row-start-4 col-start-10 col-span-3" />
        </div>
      </div>
    </div>
  );
}
