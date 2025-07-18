export default function LandingHero() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="w-3/6">
        <div className="grid grid-rows-8 grid-cols-13 gap-4">
          
          {/* Image 1 */}
          <div className="relative group row-start-2 row-span-3 col-span-4 rounded-md overflow-hidden">
            <img src="/Sinners.png" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

            <p className="absolute top-8 left-5 text-white text-2xl font-extrabold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              SINNERS
            </p>
          </div>

          {/* Image 2 */}
          <div className="relative group col-start-5 row-span-4 col-span-3 rounded-md overflow-hidden">
            <img src="/F1.jpg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

            <p className="absolute top-8 left-5 text-white text-lg font-extrabold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              F1: THE MOVIE
            </p>
          </div>

          {/* Image 3 */}
          <div className="relative group row-start-3 col-start-8 row-span-2 col-span-3 rounded-md overflow-hidden">
            <img src="/F4.jpeg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

            <p className="absolute top-8 left-5 text-white text-lg font-extrabold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              FANTASTIC 4
            </p>
          </div>

          {/* Image 4 */}
          <div className="relative group row-start-5 col-start-2 row-span-3 col-span-6 rounded-md overflow-hidden">
            <img src="/Superman.jpg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

            <p className="absolute top-8 left-5 text-white text-4xl font-extrabold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              SUPERMAN
            </p>
          </div>

          {/* Image 5 */}
          <div className="relative group row-start-5 row-span-4 col-span-5 rounded-md overflow-hidden">
            <img src="/JWR.jpg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

            <p className="absolute top-8 left-5 text-white text-lg font-extrabold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              JURASSIC WORLD: REBIRTH
            </p>
          </div>

          {/* Logo (no overlay) */}
          <img src="/Logo.svg" alt="Your Logo" className="w-full h-full row-start-4 col-start-11 col-span-3" />
        
        </div>
      </div>
    </div>
  );
}
