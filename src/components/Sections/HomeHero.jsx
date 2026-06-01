/* Specific to the Home page hero */
import Button from "../UI/Button";

const HomeHero = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
      {/* Hero Background Pattern */}
      <img
        src="/REPLACE_IMAGE_HERE"
        alt="Hero Background Pattern"
        className="absolute top-0 right-0 w-1/3 md:w-1/4 h-auto pointer-events-none opacity-20"
      />
      
      <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
        <h4 className="text-xs font-semibold text-[#A88877] tracking-[3px] uppercase">
          Artisan Heritage Since 1998
        </h4>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#4D342D] leading-[1.1] font-serif">
          Merangkai Warisan dalam Setiap Helai Batik
        </h1>
        <p className="text-base text-[#5C4D46] leading-relaxed max-w-xl">
          Experience the silent poetry of Indonesian craftsmanship. Every pattern tells a story of patience, culture, and timeless elegance – hand-drawn for the modern soul.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button>Explore Collection</Button>
          <Button variant="secondary">Try On Batik</Button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;