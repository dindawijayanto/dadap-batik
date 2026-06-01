const ProcessHero = () => {
  return (
    <section className="pt-32 pb-16 px-6 md:px-16 lg:px-24 bg-[#FAF6F2] flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      <div className="flex-1 flex flex-col gap-6">
        <span className="text-xs font-bold tracking-[3px] text-[#A88877] uppercase">
          The Metamorphosis
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#4D342D] leading-tight">
          Where Every <br />
          Thread <br />
          Tells a Story.
        </h1>
        <p className="text-[#5C4D46] leading-relaxed max-w-md">
          Batik is not simply made; it is nurtured. Explore the complex, time-honored stages that transform a blank canvas into a masterpiece of Indonesian heritage.
        </p>
      </div>
      
      <div className="flex-1 w-full relative">
        {/* Main Image */}
        <div className="w-full aspect-square md:aspect-[4/3] bg-[#E6DDD6] overflow-hidden rounded-sm relative">
          <img 
            src="/REPLACE_IMAGE_HERE" 
            alt="Artisan applying hot wax" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Floating Box */}
        <div className="absolute -bottom-6 right-6 md:-bottom-10 md:-right-10 bg-white p-6 shadow-lg max-w-[240px] border border-[#E6DDD6]">
          <p className="text-xs font-semibold text-[#4D342D] italic leading-relaxed">
            "Patience is the unseen dye that colors every piece of Batik Tulis."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessHero;