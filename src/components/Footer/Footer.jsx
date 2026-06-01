const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF6F2] pt-16 pb-8 px-6 md:px-16 lg:px-24 border-t border-[#E6DDD6]">
      {/* Top Section: Brand Info & Address */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
        
        {/* Left: Brand Identity */}
        <div className="flex flex-col gap-3 max-w-sm">
          <h2 className="font-serif text-2xl font-bold text-[#4D342D]">
            Dadap Batik
          </h2>
          <p className="text-sm text-[#8C7A71] leading-relaxed">
            © {currentYear} Dadap Batik. Crafting Heritage, <br className="hidden md:block" />
            Weaving Stories.
          </p>
        </div>

        {/* Right: Contact / Studio Info */}
        <div className="flex flex-col gap-3 md:text-right">
          <h3 className="text-sm font-bold tracking-[2px] text-[#4D342D] uppercase">
            Visit Our Studio
          </h3>
          <div className="text-sm text-[#8C7A71] leading-relaxed">
            <p>
              {/* Replace with actual address */}
              REPLACE_ADDRESS_HERE
            </p>
            <p className="mt-1">
              Mon - Sat: 09:00 - 18:00
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Slogan */}
      <div className="pt-8 border-t border-[#E6DDD6] text-center">
        <p className="text-xs md:text-sm font-semibold tracking-[4px] md:tracking-[6px] text-[#A88877] uppercase">
          Artisanal Excellence • Cultural Integrity • Timeless Design
        </p>
      </div>
    </footer>
  );
};

export default Footer;