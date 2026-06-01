const StoryStats = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#FAF6F2] flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      {/* Left: Images Grid */}
      <div className="flex-1 flex gap-4 w-full justify-center lg:justify-start">
        <div className="w-1/2 aspect-square overflow-hidden rounded-sm">
          <img src="/REPLACE_IMAGE_HERE" alt="Artisan portrait" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2 aspect-square overflow-hidden rounded-sm">
          <img src="/REPLACE_IMAGE_HERE" alt="Workshop sunlight" className="w-full h-full object-cover" />
        </div>
      </div>
      
      {/* Right: Content & Stats */}
      <div className="flex-1 flex flex-col gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#4D342D] mb-4">Hands that Remember</h2>
          <p className="text-[#5C4D46] leading-relaxed">
            We entrust our legacy to the hands of artisans who have grown up breathing the scent of melted wax. Their muscle memory is our greatest asset, bringing centuries-old patterns to life with unparalleled precision.
          </p>
        </div>
        
        <div className="flex gap-12">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold tracking-widest text-[#A88877] uppercase">Time Invested</span>
            <span className="text-3xl font-serif text-[#4D342D]">120+ Hours</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold tracking-widest text-[#A88877] uppercase">Heritage</span>
            <span className="text-3xl font-serif text-[#4D342D]">4 Ancestral Lines</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryStats;