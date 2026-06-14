export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-48 py-24">
      <div className="flex flex-col items-center lg:items-start gap-4 w-full md:w-1/2">
        <p className="text-[#B2993D] text-sm font-dm-sans font-bold tracking-widest mb-2 uppercase">
          Masa Depan Warisan Leluhur
        </p>
        <h1 className="text-4xl md:text-6xl font-noto-serif font-bold  text-[#2D241B] leading-tight mb-4 text-center lg:text-start">
          Temukan Jati Dirimu Melalui Batik
        </h1>
        <p className="text-[#001020] mb-8 font-dm-sans text-lg md:text-xl text-center lg:text-start">
          Rasakan perpaduan keahlian pengrajin dan kecerdasan buatan masa kini. 
          Jadikan warisan batik Nusantara milikmu, diukur untuk tubuhmu, diciptakan untuk jiwamu.
        </p>

        <a href="#simulate"
          className="flex justify-center items-center font-medium rounded-full w-60 px-12 py-4 bg-linear-to-r from-[#B2993D] to-[#001020] text-white tracking-widest uppercase hover:cursor-pointer hover:opacity-95 transition-all ease-in-out duration-300">
          Mulai Styling
        </a>
      </div>
      
      <div className="w-full h-full md:w-1/2 flex justify-center lg:justify-end">
        {/* Arch container layout */}
        <div className="w-full h-full max-w-lg">
          <img 
            src="/try_on/hero.png" 
            alt="Dadap Batik Hero"
            className="w-full h-full object-cover rounded-sm shadow-3xl shadow-[#FBECD0]"
          />
        </div>
      </div>
    </section>
  );
}