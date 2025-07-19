export default function ImageHero({ title, imageURL, className = '' }) {
  return (
    <div className={`relative group rounded-md overflow-hidden ${className}`}>
      <img src={imageURL} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
      <p className="absolute top-8 left-5 text-white text-2xl font-extrabold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {title}
      </p>
    </div>
  );
}
