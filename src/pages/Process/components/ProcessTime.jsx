const ProcessTime = () => {
  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-linear-to-br from-5% to-75% from-[#B2993D] to-[#001020] overflow-hidden flex flex-col lg:flex-row items-center gap-16">
      {/* Background Graphic Placeholder (Angled overlay) */}
      {/* <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-white transform skew-x-12"></div>
      </div> */}

      <div className="flex-1 flex flex-col gap-8 relative z-10">
        <h2 className="text-center lg:text-start text-3xl md:text-5xl font-noto-serif font-semibold text-[#FAF6F2] leading-tight">
          Mengapa Pembuatan Batik Asli Memerlukan Waktu.
        </h2>
        <p className="text-[#E6DDD6] text-center lg:text-start font-dm-sans leading-relaxed text-sm md:text-base">
          Di tengah dunia yang serba cepat, Dadap Batik hadir sebagai penjaga tradisi yang agung. Satu lembar Batik Tulis memerlukan waktu satu sampai empat minggu untuk sempurna. Ini bukan sekadar produksi, ini adalah percakapan antara pengrajin, alam, dan roh dari setiap motif.
        </p>

        <div className="border border-[#D4A484] opacity-20"></div>
        
        <div className="flex justify-center lg:justify-start gap-12 mt-4">
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-noto-serif text-[#FAF6F2]">100%</span>
            <span className="text-xs font-dm-sans font-regular tracking-widest text-[#A88877] uppercase">Bahan Alami</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center lg:justify-end w-full relative z-10 ">
        {/* Frame inside dark section */}
        <div className="w-full max-w-lg aspect-square bg-transparent p-4 md:p-12 rounded-lg border-[#D4A48410] border-12">
          <img 
            src="/process/working.png" 
            alt="Artisan working" 
            className="w-full h-full object-cover rounded-lg opacity-100"
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessTime;