const ContactFormSection = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-[#FAF6F2]">
      {/* Container utama menggunakan grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        
        {/* KIRI: Inquiry Form */}
        {/* TAMBAHAN: h-full agar tingginya tegas menempati seluruh ruang baris */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#B2993D] via-[#001020] via-100% to-[#001020] p-8 md:p-14 rounded-sm shadow-lg h-full flex flex-col">
          <h2 className="text-[28px] font-serif text-[#EFEAE4] mb-10 md:mb-12">Formulir Pertanyaan</h2>
          
          <form className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest text-[#EFEAE4]/70 uppercase">Nama Lengkap</label>
                <input 
                  type="text" 
                  placeholder="E.g. Daniel Irwanto" 
                  className="bg-transparent border-b border-white/20 py-2 text-[#EFEAE4] text-sm focus:outline-none focus:border-[#EFEAE4] placeholder-white/30 transition-colors"
                />
              </div>
              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest text-[#EFEAE4]/70 uppercase">Alamat Email</label>
                <input 
                  type="email" 
                  placeholder="daniel@culture.id" 
                  className="bg-transparent border-b border-white/20 py-2 text-[#EFEAE4] text-sm focus:outline-none focus:border-[#EFEAE4] placeholder-white/30 transition-colors"
                />
              </div>
            </div>

            {/* Nature of Inquiry */}
            <div className="flex flex-col gap-2 relative">
              <label className="text-[10px] font-bold tracking-widest text-[#EFEAE4]/70 uppercase">Maksud & Tujuan</label>
              <select className="bg-transparent border-b border-white/20 py-2 text-[#EFEAE4] text-sm focus:outline-none focus:border-[#EFEAE4] appearance-none cursor-pointer transition-colors">
                <option className="bg-[#001020] text-[#EFEAE4]">Pesanan Batik Eksklusif</option>
                <option className="bg-[#001020] text-[#EFEAE4]">Pendaftaran Workshop</option>
                <option className="bg-[#001020] text-[#EFEAE4]">Pertanyaan Umum</option>
              </select>
              {/* Custom Chevron Icon */}
              <div className="absolute right-0 top-8 pointer-events-none text-white/50">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold tracking-widest text-[#EFEAE4]/70 uppercase">Kirim Pesan</label>
              <textarea 
                rows="3"
                placeholder="Ceritakan visi atau pertanyaanmu kepada kami..." 
                className="bg-transparent border-b border-white/20 py-2 text-[#EFEAE4] text-sm focus:outline-none focus:border-[#EFEAE4] placeholder-white/30 resize-none transition-colors"
              ></textarea>
            </div>

            {/* Submit Area */}
            <div className="mt-4">
              <button 
                type="button" 
                className="bg-[#001020] text-[#EFEAE4] text-[11px] font-bold tracking-widest uppercase py-3.5 px-8 rounded-sm hover:bg-[#B2993D] transition-colors w-full sm:w-auto"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>

        {/* KANAN: Quick Contacts & Socials */}
        {/* TAMBAHAN: h-full dan justify-between adalah kunci agar sejajar atas-bawah! */}
        <div className="flex flex-col gap-8 h-full justify-between">
          
          {/* Direct Artisan Line */}
          <div className="bg-[#FFEAD7] p-8 md:p-10 rounded-sm text-[#001020] flex flex-col gap-5 shadow-sm">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <h3 className="text-[22px] font-noto-serif leading-snug text-[#1A1A1A]">Hubungi Pengrajin Langsung</h3>
            <p className="text-[13px] font-dm-sans text-[#4A4A4A] leading-relaxed mb-4">
              Bicara langsung dengan konsultan batik kami via WhatsApp untuk mendapatkan bantuan segera.
            </p>
            <a 
              href="https://wa.me/6281334555825" 
              target="_blank" 
              rel="noreferrer"
              className="font-['DM_Sans',_sans-serif] text-[12px] font-bold tracking-widest uppercase text-[#1A1A1A] hover:text-[#B5914A] transition-colors flex items-center gap-2"
            >
              Chat via WhatsApp <span className="text-lg leading-none">→</span>
            </a>
          </div>

          {/* Social Channels */}
          <div className="bg-[#FFEAD7] p-8 md:p-10 rounded-sm flex flex-col gap-5 shadow-sm">
            <h3 className="text-[11px] font-bold tracking-widest text-[#1A1A1A] uppercase mb-1">Ikuti Kami Di Media Sosial</h3>
            
            <a href="https://www.instagram.com/dadapbatikbatu?igsh=MW41eGlzYXQxNGt4MQ==" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-white px-5 py-4 rounded-sm border border-transparent hover:border-[#B5914A] transition-all group shadow-sm">
              <span className="text-[13px] font-medium text-[#1A1A1A]">Instagram</span>
              <svg className="w-4 h-4 text-[#1A1A1A] group-hover:text-[#B5914A] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
            
            <a href="https://www.tiktok.com/@dadapbatikbatu?_r=1&_t=ZS-97CO6v3S29l" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-white px-5 py-4 rounded-sm border border-transparent hover:border-[#B5914A] transition-all group shadow-sm">
              <span className="text-[13px] font-medium text-[#1A1A1A]">Tiktok</span>
              <svg className="w-4 h-4 text-[#1A1A1A] group-hover:text-[#B5914A] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;