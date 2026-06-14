const ContactHeader = () => {
  return (
    <section className="pt-36 pb-16 px-6 md:px-12 lg:px-24 bg-[#FAF6F2]">
      {/* Container diubah menggunakan w-full & proporsi lebar kolom */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-20 max-w-7xl mx-auto w-full">
        
        {/* Kolom Kiri - Heading (Mengambil porsi lebih besar) */}
        <div className="lg:w-3/5">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#B2993D] uppercase mb-6 block">
            Jalin Hubungan Dengan Pengrajin
          </span>
          {/* Menggunakan ukuran teks yang sangat besar (text-[72px]) dengan leading rapat untuk kesan editorial */}
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-serif text-[#001020] leading-[1.05] font-bold tracking-tight">
            Mari Lestarikan <br />
            Budaya Bersama-<br />
            sama.
          </h1>
        </div>

        {/* Kolom Kanan - Deskripsi */}
        {/* pb-3 membantu menyejajarkan *baseline* teks kanan dengan kata "sama." di kolom kiri */}
        <div className="lg:w-2/5 pb-3">
          <p className="text-[#001020]/80 leading-relaxed font-dm-sans max-w-md text-[15px] font-normal">
            Apakah kamu menginginkan karya batik eksklusif atau ingin mengenal lebih dalam seni pewarnaan malam, galeri kami selalu terbuka untukmu.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default ContactHeader;