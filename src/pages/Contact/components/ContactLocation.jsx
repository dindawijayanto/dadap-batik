const ContactLocation = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 bg-[#F6EDE5] border border-[#E6DDD6] rounded-sm overflow-hidden">
        
        {/* Address Details */}
        <div className="flex-1 p-8 md:p-16 flex flex-col gap-6">
          <h2 className="text-3xl font-serif text-[#4D342D]">Our Atelier</h2>
          
          <div className="flex flex-col gap-2 text-[#5C4D46] text-sm md:text-base leading-relaxed">
            <span className="font-bold">Solo Heritage District</span>
            <p>Jl. Laweyan No. 42, Surakarta<br />Central Java, Indonesia 57148</p>
          </div>
          
          <div className="flex flex-col gap-2 mt-4 text-sm text-[#5C4D46]">
            <div className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>Mon - Sat: 09:00 - 16:00</span>
            </div>
            <div className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>+62 812 3456 7890</span>
            </div>
          </div>
        </div>

        {/* Map Image (Right Side) */}
        <div className="flex-[1.5] w-full h-64 md:h-full relative bg-[#E6DDD6]">
          <img 
            src="/REPLACE_IMAGE_HERE" 
            alt="Atelier Location Map" 
            className="w-full h-full object-cover"
          />
          {/* Location Pin Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-8 h-8 bg-[#4D342D] text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
                <span className="block w-2 h-2 bg-white rounded-full"></span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactLocation;