const StoryStats = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 bg-[#FAF6F2]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* Kiri: Dua foto berdampingan — lebih kecil di mobile */}
        <div className="w-full lg:flex-1 flex gap-3 justify-center">
          <div className="w-36 sm:w-44 lg:w-1/2 aspect-[3/4] overflow-hidden rounded-sm flex-shrink-0">
            <img
              src="/our_story/stats1.png"
              alt="Pengrajin membatik"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="w-36 sm:w-44 lg:w-1/2 aspect-[3/4] overflow-hidden rounded-sm flex-shrink-0">
            <img
              src="/our_story/stats2.png"
              alt="Ruang workshop batik"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Kanan: Teks & Statistik */}
        <div className="flex-1 flex flex-col gap-7 text-center lg:text-left items-center lg:items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-noto-serif text-[#001020] leading-[1.2] mb-4">
              Tangan yang<br />Menyimpan Ingatan
            </h2>
            <p className="text-[#4A4A4A] text-sm leading-relaxed font-dm-sans max-w-xs sm:max-w-sm">
              Para pengrajin kami adalah penjaga sejati tradisi Batik Tulis. Berbeda
              dari produksi massal, proses kami membutuhkan waktu. Kami
              menunggu malam mengeras, menunggu warna meresap, menunggu
              matahari mengeringkan serat kain. Kesabaran itu bukan kelemahan, itu
              tanda tangan kami.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <div className="border-l-2 border-[#B2993D] pl-4 flex flex-col gap-1 text-left">
              <span className="text-[10px] font-dm-sans font-semibold tracking-widest text-[#B2993D] uppercase">
                Waktu Pengerjaan
              </span>
              <span className="text-2xl sm:text-3xl font-noto-serif text-[#001020]">
                120+ Jam
              </span>
            </div>

            <div className="border-l-2 border-[#B2993D] pl-4 flex flex-col gap-1 text-left">
              <span className="text-[10px] font-dm-sans font-semibold tracking-widest text-[#B2993D] uppercase">
                Generasi
              </span>
              <span className="text-2xl sm:text-3xl font-noto-serif text-[#001020]">
                4 Garis Keturunan Leluhur
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StoryStats;