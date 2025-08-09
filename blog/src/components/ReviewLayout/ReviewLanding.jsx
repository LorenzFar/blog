import Logo from "../Logo";

export default function ReviewLanding() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="w-5/6 grid grid-rows-6 grid-cols-8 gap-4 relative">

        <div className="relative row-start-1 row-span-4 col-start-2 col-span-7 overflow-hidden rounded-md">
          <img src="/JWR.jpg" className="w-full h-full object-cover aspect-video" />
        </div>

        <div className="row-start-3 row-span-3 col-start-1 col-span-4 z-10 flex items-center">
          <p className="text-white text-[6.5vw] font-black leading-tight">
            "Balancing Awe & Awk"
          </p>
        </div>

        <div className="row-start-5 row-span-2 col-start-6 col-span-3 flex items-end justify-end">
          <p className="text-white text-[2vw] font-black text-end">
            Jurassic World: Rebirth <br /> (2025)
          </p>
        </div>

        <Logo isHeroInView={false}/>
      </div>
    </div>
  );
}
