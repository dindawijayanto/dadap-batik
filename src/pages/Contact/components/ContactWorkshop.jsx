
const ContactWorkshop = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAF6F2]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Kolom Kiri: Images Configuration */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-start">
          {/* Main Large Image */}
          <div className="w-[85%] lg:w-[80%] aspect-[4/5] bg-[#E6DDD6] overflow-hidden rounded-sm relative z-10 shadow-sm">
            <img 
              src="/contact/image1.png" 
              alt="Proses membatik" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Small Floating Image (Polaroid Effect) */}
          <div className="absolute -bottom-8 -right-2 md:-bottom-12 md:right-8 lg:-bottom-10 lg:-right-4 w-[45%] md:w-[40%] aspect-square z-20">
             <img 
              src="/contact/image2.png" 
              alt="Alat cap batik" 
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>

        {/* Kolom Kanan: Text Details */}
        <div className="flex-1 flex flex-col justify-center pt-16 lg:pt-0">
          <span className="text-[11px] font-dm-sans font-bold tracking-[0.2em] text-[#A87B1E] uppercase mb-5 block">
            Pengalaman Di Balik Layar
          </span>
          <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-noto-serif text-[#001020] leading-[1.15] mb-6 font-medium">
            Rasakan sendiri prosesnya.
          </h2>
          <p className="text-[15px] text-[#001020]/80 font-dm-sans leading-relaxed max-w-[480px] mb-10">
            Galeri kami bukan sekadar tempat produksi, ia adalah museum yang hidup. Kami membuka sesi privat bagi siapa saja yang ingin memahami jiwa dan filosofi di balik setiap lembar batik.
          </p>
          <div>
            <a 
              target="_blank"
              href="https://wa.me/6281334555825?text=Halo%2C%20saya%20tertarik%20untuk%20mengikuti%20sesi%20workshop%20privat%20di%20Dadap%20Batik." 
              className="text-[13px] font-bold text-[#001020] inline-flex items-center gap-2 border-b-[1.5px] border-[#001020] pb-1 hover:text-[#A87B1E] hover:border-[#A87B1E] transition-all"
            >
              Pesan Sesi Privat<span className="text-lg leading-none transform translate-y-[-1px]">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactWorkshop;