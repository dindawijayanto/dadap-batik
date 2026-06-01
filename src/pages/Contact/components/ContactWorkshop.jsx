const ContactWorkshop = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Images Configuration */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-start">
          {/* Main Large Image */}
          <div className="w-[85%] aspect-[3/4] bg-[#E6DDD6] overflow-hidden rounded-sm relative z-10">
            <img 
              src="/REPLACE_IMAGE_HERE" 
              alt="Applying wax" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Small Floating Image */}
          <div className="absolute -bottom-8 right-0 md:-bottom-12 md:right-4 w-1/2 aspect-square bg-white p-2 shadow-lg z-20">
             <img 
              src="/REPLACE_IMAGE_HERE" 
              alt="Workshop tools" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Details */}
        <div className="flex-1 flex flex-col gap-6 pt-12 lg:pt-0">
          <span className="text-xs font-bold tracking-[3px] text-[#A88877] uppercase">
            The Workshop Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#4D342D] leading-tight">
            Immerse Yourself in the Process.
          </h2>
          <p className="text-[#5C4D46] leading-relaxed">
            Our workshop is more than a production site; it is a living museum. We host private sessions for those seeking to understand the soul of Batik.
          </p>
          <div className="mt-4">
            <a 
              href="REPLACE_WORKSHOP_BOOKING_LINK" 
              className="text-sm font-bold text-[#4D342D] border-b border-[#4D342D] pb-1 hover:text-[#A88877] hover:border-[#A88877] transition-all uppercase tracking-widest"
            >
              Book A Private Session →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactWorkshop;