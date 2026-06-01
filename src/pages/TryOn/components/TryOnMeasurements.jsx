const TryOnMeasurements = ({ measurements, setMeasurements }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeasurements(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left: Measurement Inputs */}
        <div className="flex-1 bg-[#F1E9E0] p-8 md:p-12 border border-[#E6DDD6] rounded-sm w-full">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-serif text-[#4D342D]">Tailored Precision</h3>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A88877" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M3 10h18M8 4v6M16 4v6"></path></svg>
          </div>
          <p className="text-sm text-[#8C7A71] mb-8 leading-relaxed">
            Adjust your measurements to ensure the simulated drape matches your exact proportions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1 bg-[#FAF6F2] p-4 border border-[#E6DDD6] flex flex-col">
              <label className="text-xs font-bold text-[#8C7A71] uppercase tracking-wide">Height</label>
              <div className="flex items-end gap-2 mt-1">
                <input type="number" name="height" value={measurements.height} onChange={handleChange} placeholder="178" className="bg-transparent text-2xl font-serif text-[#4D342D] w-full focus:outline-none placeholder-[#D5CDC4]" />
                <span className="text-[#8C7A71] font-bold pb-1">cm</span>
              </div>
            </div>
            
            <div className="flex-1 bg-[#FAF6F2] p-4 border border-[#E6DDD6] flex flex-col">
              <label className="text-xs font-bold text-[#8C7A71] uppercase tracking-wide">Weight</label>
              <div className="flex items-end gap-2 mt-1">
                <input type="number" name="weight" value={measurements.weight} onChange={handleChange} placeholder="72" className="bg-transparent text-2xl font-serif text-[#4D342D] w-full focus:outline-none placeholder-[#D5CDC4]" />
                <span className="text-[#8C7A71] font-bold pb-1">kg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Silhouette Placeholder */}
        <div className="flex-1 w-full flex justify-center">
          <div className="w-[80%] max-w-sm aspect-[3/4] bg-[#EAE4DF] rounded-3xl flex flex-col items-center justify-center text-[#A88877] border-2 border-dashed border-[#D5CDC4] cursor-pointer hover:bg-[#E3DCD5] transition-colors">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span className="mt-4 text-sm font-semibold">Upload Full Body Photo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryOnMeasurements;