const ProcessTime = () => {
  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-[#4D342D] overflow-hidden flex flex-col lg:flex-row items-center gap-16">
      {/* Background Graphic Placeholder (Angled overlay) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-white transform skew-x-12"></div>
      </div>

      <div className="flex-1 flex flex-col gap-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif text-[#FAF6F2] leading-tight">
          Why Real Batik <br className="hidden md:block" /> Takes Time.
        </h2>
        <p className="text-[#E6DDD6] leading-relaxed text-sm md:text-base max-w-md">
          True artisanship cannot be rushed. Each step is a deliberate act of preserving heritage. Our artisans spend weeks, sometimes months, ensuring every dot and line carries the spirit of traditional Javanese philosophy.
        </p>
        
        <div className="flex gap-12 mt-4">
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-serif text-[#FAF6F2]">120+</span>
            <span className="text-xs font-bold tracking-widest text-[#A88877] uppercase">Hours per piece</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-serif text-[#FAF6F2]">100%</span>
            <span className="text-xs font-bold tracking-widest text-[#A88877] uppercase">Manual Process</span>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full relative z-10">
        {/* Frame inside dark section */}
        <div className="w-full max-w-md mx-auto aspect-square bg-[#3A261C] p-4 md:p-8 rounded-sm">
          <img 
            src="/REPLACE_IMAGE_HERE" 
            alt="Artisan working" 
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessTime;