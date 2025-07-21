export default function ImageHero({ title, imageURL, className = '' }) {
  return (
    <div className={`relative group rounded-md overflow-hidden ${className}`}>
      <img src={imageURL} alt={title} className="w-full h-full object-cover" />
      
      {/* Overlay with flex center alignment */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

      {/* Text with flexible positioning */}
      <div className="absolute inset-0 flex place-items-center justify-start p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white font-black text-[1.2vw]">
            {title}
        </p>
      </div>
    </div>
  );
}
