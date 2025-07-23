export default function GameContent() {
    return (
        <div
            className="grid grid-rows-2 absolute z-50 text-white font-black place-items-center"
            style={{ top: '40%', right: '15vw' }}
        >
            <p className="text-[2.3vw] max-w-sm leading-snug">
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
    );
}