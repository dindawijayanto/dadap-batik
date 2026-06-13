const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4E342E]/5 pt-16 pb-8 px-6 md:px-16 lg:px-24 border-t border-[#E6DDD6]">
      {/* Top Section: Brand Info & Address */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
        {/* Left: Brand Identity */}
        <div className="flex flex-col gap-3 max-w-sm">
          <h2 className="font-serif text-2xl font-bold text-[#001020]">
            Dadap Batik
          </h2>
          <p className="text-sm text-[#001020] leading-relaxed">
            © {currentYear} Dadap Batik. <br />
            Merawat Warisan, <br className="hidden md:block" />
            Merajut Cerita.
          </p>
        </div>

        {/* Right: Contact / Studio Info */}
        <div className="flex flex-col gap-3 md:text-right">
          <h3 className="text-sm font-bold tracking-[2px] text-[#001020] uppercase">
            kunjungi galeri kami
          </h3>
          <div className="text-sm text-[#001020] leading-relaxed max-w-[288px]">
            <p>
              {/* Replace with actual address */}
              Jl. Pronoyudo, Semanding, Dadaprejo, Kec. Dau, Kota Batu, Jawa
              Timur, Indonesia 65323
            </p>
            <p className="mt-1">Senin - Sabtu : 08:00 - 18:00</p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Slogan */}
      <div className="pt-8 border-t border-[#E6DDD6] text-center">
        <p className="text-xs font-regular tracking-[4px] md:tracking-[6px] text-[#001020]/60 uppercase">
          Keunggulan Tangan • Ketulusan Budaya • Keindahan Abadi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
