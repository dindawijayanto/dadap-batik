const StoryHero = () => {
  return (
    <section className="pt-32 pb-16 px-6 md:px-16 lg:px-24 bg-[#FAF6F2] flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
      <div className="flex-1 flex flex-col gap-6">
        <span className="text-xs font-bold tracking-[3px] text-[#A88877] uppercase">
          Our Philosophy
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#4D342D] leading-tight">
          The Slow Breath of <br />
          <span className="italic">Heritage.</span>
        </h1>
        <p className="text-[#5C4D46] leading-relaxed max-w-lg">
          At Dadap Batik, time stands still. Every stroke of the canting is a deliberate meditation, translating the whispers of our ancestors into patterns that drape the modern soul.
        </p>
      </div>
      <div className="flex-1 w-full">
        <div className="w-full aspect-[4/5] max-w-md mx-auto lg:ml-auto overflow-hidden rounded-sm">
          <img 
            src="/REPLACE_IMAGE_HERE" 
            alt="Hand drawing batik" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default StoryHero;