
export default function GameContent({ slideIndex }) {
    const logo = ["/ITTLogo.png", "/F4Logo.png", "/SupermanLogo.png", "JWRLogo.webp"];

    return (
        <div className="absolute inset-0 grid grid-cols-2 place-items-center z-10">
            <img
              src={logo[slideIndex]}
              className="w-1/2"
              alt="Logo"
            />
            
            <div
                className="grid grid-rows-2 z-50 text-white font-black place-items-center"
            >
                <p className="text-[2.3vw] max-w-sm leading-snug text-center">
                    "Embark on the craziest journey of your life"
                </p>

                <div className="liquidGlass-wrapper button">
                    <div className="liquidGlass-effect"/>
                    <div className="liquidGlass-tint"/>
                    <div className="liquidGlass-shine"/>
                    <div className="liquidGlass-text button-text">
                        Learn More
                    </div>
                </div>
            </div>
        </div>
    );
}