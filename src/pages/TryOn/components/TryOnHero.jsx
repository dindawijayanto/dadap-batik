const TryOnHero = () => {
  return (
    <section className="pt-32 pb-16 px-6 md:px-16 lg:px-24 bg-[#FAF6F2] flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
      <div className="flex-1 flex flex-col gap-6 max-w-xl">
        <span className="text-xs font-bold tracking-[3px] text-[#A88877] uppercase">
          Digital Fitting Room
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#4D342D] leading-tight">
          Visualize Your <br />
          Identity Through <br />
          Batik
        </h1>
        <p className="text-[#5C4D46] leading-relaxed">
          Experience the intersection of ancient craftsmanship and modern AI. Select your silhouette, apply our heritage motifs, and see your custom piece come to life.
        </p>
        <div className="mt-4">
          <button className="bg-[#4D342D] text-white text-sm font-semibold py-3 px-8 rounded-full hover:bg-[#6D493E] transition-colors">
            TRY ON NOW
          </button>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center lg:justify-end w-full">
        <div className="w-[80%] max-w-md aspect-[3/4] bg-[#3A261C] rounded-t-full overflow-hidden border-4 border-[#F6EDE5] shadow-xl">
          <img 
            src="/REPLACE_IMAGE_HERE" 
            alt="Batik Dress Preview" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TryOnHero;