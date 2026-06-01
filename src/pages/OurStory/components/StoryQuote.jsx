const StoryQuote = () => {
  return (
    <section className="bg-[#4D342D] py-24 px-6 md:px-16 text-center flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <span className="text-[#A88877] text-6xl font-serif leading-none h-8">"</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#FAF6F2] leading-snug">
          "Batik is not just a cloth; it is a <span className="text-[#D4A373] italic">prayer</span> written in wax, a philosophy worn on the skin."
        </h2>
        <p className="text-[#A88877] text-sm tracking-widest uppercase mt-4">
          — Imam, Founder
        </p>
      </div>
    </section>
  );
};

export default StoryQuote;