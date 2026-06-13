const ProcessHero = () => {
  return (
    <section className="pt-24 pb-16 px-6 md:px-16 lg:px-24 bg-[#FAF6F2] flex flex-col lg:flex-row items-center gap-60">
      <div className="flex-1 flex flex-col gap-6">
        <span className="text-xs font-dm-sans font-bold tracking-[3px] text-[#B2993D] uppercase">
          Seni yang Melampaui Waktu
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-noto-serif font-bold text-[#001020] leading-tight">
          Di Setiap Helai, Tersimpan Jiwa Sang Pengrajin.
        </h1>
        <p className="text-[#001020] leading-relaxed max-w-md font-dm-sans font-regular">
          Batik sejati bukan sekadar kain, ia adalah doa, kesabaran, dan identitas yang diwariskan dari generasi ke generasi. Temukan perjalanan di balik setiap goresan canting yang membentuk kebanggaan Nusantara.
        </p>
      </div>
      
      <div className="flex-1 w-full relative">
        {/* Main Image */}
        <div className="w-full aspect-square bg-[#E6DDD6] overflow-hidden rounded-sm relative">
          <img 
            src="/process/artisan.png"
            alt="Artisan applying hot wax"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Floating Box */}
        <div className="absolute -bottom-6 right-6 md:bottom-6 md:right-6 bg-white/80 p-4 shadow-lg max-w-[320px] border border-[#E6DDD6]">
          <p className="text-md font-noto-serif font-regular text-[#4D342D] italic leading-relaxed">
            “Kesabaran adalah unsur utama dalam setiap jarak kain Batik Tulis.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessHero;