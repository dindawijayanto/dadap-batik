const ContactFormSection = () => {
  return (
    <section className="py-12 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        
        {/* Left: Inquiry Form */}
        <div className="lg:col-span-2 bg-[#F6EDE5] p-8 md:p-12 rounded-sm border border-[#E6DDD6]">
          <h2 className="text-2xl font-serif text-[#4D342D] mb-8">Inquiry Form</h2>
          
          <form className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-wide text-[#8C7A71] uppercase">First Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Naryo Wijoyo" 
                  className="bg-transparent border-b border-[#D5CDC4] py-2 text-[#4D342D] focus:outline-none focus:border-[#4D342D] placeholder-[#A88877]"
                />
              </div>
              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-wide text-[#8C7A71] uppercase">Email Address</label>
                <input 
                  type="email" 
                  placeholder="contact@culture.id" 
                  className="bg-transparent border-b border-[#D5CDC4] py-2 text-[#4D342D] focus:outline-none focus:border-[#4D342D] placeholder-[#A88877]"
                />
              </div>
            </div>

            {/* Nature of Inquiry */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-wide text-[#8C7A71] uppercase">Nature of Inquiry</label>
              <select className="bg-transparent border-b border-[#D5CDC4] py-2 text-[#4D342D] focus:outline-none focus:border-[#4D342D] appearance-none cursor-pointer">
                <option>Custom Batik Commission</option>
                <option>Workshop Registration</option>
                <option>General Inquiry</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-wide text-[#8C7A71] uppercase">Your Message</label>
              <textarea 
                rows="4"
                placeholder="Describe your vision or inquiry..." 
                className="bg-transparent border-b border-[#D5CDC4] py-2 text-[#4D342D] focus:outline-none focus:border-[#4D342D] placeholder-[#A88877] resize-none"
              ></textarea>
            </div>

            {/* Submit Area */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-4">
              <button 
                type="button" // Ubah ke type="submit" saat dihubungkan ke backend
                className="bg-[#4D342D] text-white text-sm font-semibold py-3 px-8 hover:bg-[#6D493E] transition-colors w-full sm:w-auto"
              >
                SEND MESSAGE
              </button>
              <span className="text-xs text-[#8C7A71] italic">
                Usually responds within 24 hours.
              </span>
            </div>
          </form>
        </div>

        {/* Right: Quick Contacts & Socials */}
        <div className="flex flex-col gap-8">
          
          {/* Direct Artisan Line */}
          <div className="bg-[#4D342D] p-8 rounded-sm text-[#FAF6F2] flex flex-col gap-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <h3 className="text-xl font-serif">Direct Artisan Line</h3>
            <p className="text-sm text-[#E6DDD6] leading-relaxed mb-4">
              Speak directly with our team concerning WhatsApp for instant assistance.
            </p>
            <a 
              href="REPLACE_WHATSAPP_LINK" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-bold tracking-widest uppercase hover:text-[#D4A373] transition-colors"
            >
              CHAT ON WHATSAPP →
            </a>
          </div>

          {/* Social Channels */}
          <div className="bg-[#F6EDE5] p-8 rounded-sm border border-[#E6DDD6] flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-wide text-[#8C7A71] uppercase mb-2">Social Channels</h3>
            
            <a href="REPLACE_INSTAGRAM_LINK" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-white p-4 border border-[#E6DDD6] hover:border-[#A88877] transition-colors group">
              <span className="text-sm font-semibold text-[#4D342D]">Instagram</span>
              <svg className="w-4 h-4 text-[#A88877] group-hover:text-[#4D342D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
            
            <a href="REPLACE_TIKTOK_LINK" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-white p-4 border border-[#E6DDD6] hover:border-[#A88877] transition-colors group">
              <span className="text-sm font-semibold text-[#4D342D]">Tiktok</span>
              <svg className="w-4 h-4 text-[#A88877] group-hover:text-[#4D342D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;