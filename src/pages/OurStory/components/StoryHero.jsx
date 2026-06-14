const StoryHero = () => {
  return (
    <section className="bg-[#FAF6F2] px-6 md:px-12 lg:px-24 pt-24 pb-12 lg:min-h-screen lg:flex lg:items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

        {/* Kiri: Teks */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
          <span className="text-[10px] font-semibold font-dm-sans tracking-[0.2em] text-[#B2993D] uppercase">
            Berdiri Sejak 2019
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[56px] xl:text-[64px] font-noto-serif text-[#001020] leading-[1.08] font-bold">
            Degup{' '}
            <span className="text-[#B2993D]">Warisan<br />Budaya</span>
            {' '}yang Tenang
          </h1>

          <p className="text-[#4A4A4A] leading-relaxed text-sm lg:text-base font-dm-sans max-w-xs sm:max-w-sm lg:max-w-md">
            Di Dadap Batik, kami tidak sekadar mewarnai kain, kami menjaga
            gema jiwa Jawa yang hidup dalam setiap helainya. Tiap goresan
            canting adalah percakapan sunyi antara pengrajin dan para leluhur,
            diukir dalam malam panas dan warna indigo.
          </p>
        </div>

        {/* Kanan: Foto */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
          <div className="w-56 sm:w-72 lg:w-full lg:max-w-sm aspect-[3/4] overflow-hidden rounded-sm shadow-md">
            <img
              src="/our_story/hero.png"
              alt="Pengrajin batik sedang mencanting"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default StoryHero;