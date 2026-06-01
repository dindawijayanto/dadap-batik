const ProcessComparison = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#2C1E16] text-[#FAF6F2]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-[#FAF6F2]">The Comparison</h2>
      </div>

      <div className="max-w-4xl mx-auto overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-[#4D342D]">
              <th className="py-4 px-6 font-bold text-[#A88877] tracking-widest uppercase text-xs w-1/4">Feature</th>
              <th className="py-4 px-6 font-bold text-white tracking-widest uppercase text-xs w-1/4 bg-[#3A261C]/50">Batik Tulis</th>
              <th className="py-4 px-6 font-bold text-[#8C7A71] tracking-widest uppercase text-xs w-1/4">Batik Cap</th>
              <th className="py-4 px-6 font-bold text-[#8C7A71] tracking-widest uppercase text-xs w-1/4">Batik Print (Fake)</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-[#4D342D]">
              <td className="py-6 px-6 font-semibold text-[#A88877]">Production Time</td>
              <td className="py-6 px-6 bg-[#3A261C]/30 text-white">1 - 6 Months</td>
              <td className="py-6 px-6 text-[#E6DDD6]">1 - 3 Weeks</td>
              <td className="py-6 px-6 text-[#E6DDD6]">Minutes</td>
            </tr>
            <tr className="border-b border-[#4D342D]">
              <td className="py-6 px-6 font-semibold text-[#A88877]">Process</td>
              <td className="py-6 px-6 bg-[#3A261C]/30 text-white">100% Hand-drawn with Canting</td>
              <td className="py-6 px-6 text-[#E6DDD6]">Copper Stamp (Manual)</td>
              <td className="py-6 px-6 text-[#E6DDD6]">Machine Printed Screen</td>
            </tr>
            <tr className="border-b border-[#4D342D]">
              <td className="py-6 px-6 font-semibold text-[#A88877]">Texture & Reverse</td>
              <td className="py-6 px-6 bg-[#3A261C]/30 text-white">Reversible (Identical both sides)</td>
              <td className="py-6 px-6 text-[#E6DDD6]">Reversible (Identical)</td>
              <td className="py-6 px-6 text-[#E6DDD6]">One-sided (Faded back)</td>
            </tr>
            <tr>
              <td className="py-6 px-6 font-semibold text-[#A88877]">Imperfections</td>
              <td className="py-6 px-6 bg-[#3A261C]/30 text-white">Human flaws (Sign of authenticity)</td>
              <td className="py-6 px-6 text-[#E6DDD6]">Slight misalignment</td>
              <td className="py-6 px-6 text-[#E6DDD6]">Perfectly uniform (No soul)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProcessComparison;