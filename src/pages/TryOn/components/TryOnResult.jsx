const TryOnResult = ({ selections }) => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
      <div className="text-center mb-16">
        <span className="text-xs font-bold tracking-[3px] text-[#A88877] uppercase block mb-4">Virtual Fitting Complete</span>
        <h2 className="text-4xl md:text-5xl font-serif text-[#4D342D]">Your Identity, Realized</h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Left: Rendered Output */}
        <div className="flex-[1.5] w-full aspect-[3/4] md:aspect-square lg:aspect-[4/5] bg-black rounded-sm overflow-hidden">
          <img 
            src="/REPLACE_IMAGE_HERE" 
            alt="Final Try-On Render" 
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Right: Order Summary */}
        <div className="flex-1 flex flex-col bg-[#3D261D] p-8 text-[#FAF6F2] rounded-sm">
          <div className="flex justify-between items-center mb-8 border-b border-[#5C4D46] pb-4">
            <h3 className="text-xl font-serif">Order Summary</h3>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A88877" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </div>

          <div className="flex flex-col gap-6 flex-grow">
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#A88877] uppercase tracking-wide">Base Silhouette</span>
              <span className="font-semibold">{selections.silhouette || "Flowing Dress"}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#A88877] uppercase tracking-wide">Selected Motif</span>
              <span className="font-semibold">{selections.motif || "Kawung Sari"}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#A88877] uppercase tracking-wide">Measurements</span>
              <span className="font-semibold">{selections.measurements.height || "-"} cm, {selections.measurements.weight || "-"} kg</span>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#5C4D46]">
             <div className="flex items-center gap-4 bg-[#2C1E16] p-4 mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A88877" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <div>
                  <p className="text-xs text-[#A88877] uppercase tracking-wide">Estimated Crafting Time</p>
                  <p className="font-serif text-xl mt-1">18 - 22 Weeks</p>
                </div>
             </div>

             <button className="w-full bg-transparent border border-[#A88877] text-[#FAF6F2] py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#A88877] hover:text-[#3D261D] transition-colors">
               Proceed to Checkout →
             </button>
             
             <div className="mt-6 flex flex-col gap-3 text-xs text-[#A88877]">
                <p className="flex gap-2 items-start"><span className="text-[#D4A373]">✓</span> 100% Hand-drawn (Tulis) guaranteed.</p>
                <p className="flex gap-2 items-start"><span className="text-[#D4A373]">✓</span> Price is subject to final consultation regarding detail density.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryOnResult;