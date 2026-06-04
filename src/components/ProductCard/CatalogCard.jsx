const CatalogCard = ({ title, price, description, image, onClick }) => {
  // Utility untuk format Rupiah
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const fallbackImage = "https://placehold.co/400x500/E6DDD6/8C7A71?text=Batik+Image";

  return (
    <div 
      onClick={onClick}
      // Tambahan class "group" untuk mengontrol efek hover pada elemen anak-anaknya
      className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E6DDD6] cursor-pointer group"
    >
      {/* Product Image */}
      <div className="w-full aspect-[4/5] bg-[#E6DDD6] relative overflow-hidden flex items-center justify-center">
        <img
          // Jika 'image' kosong (null/undefined), otomatis pakai fallback
          src={image || fallbackImage} 
          alt={title}
          // Tambahan efek zoom-in (scale-105) yang mulus (duration-700) saat card di-hover
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          // INI PENTING: Jika link gambar ada tapi URL-nya mati/error (404), otomatis ganti ke fallback
          onError={(e) => {
            e.target.onerror = null; // Mencegah infinite loop
            e.target.src = fallbackImage;
          }}
        />
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col gap-2">
        {/* Tambahan efek transisi warna teks saat di-hover dan pembatasan teks 1 baris (line-clamp-1) */}
        <h3 className="text-sm md:text-base font-bold text-[#4D342D] tracking-wide uppercase group-hover:text-[#A88877] transition-colors line-clamp-1">
          {title}
        </h3>
        
        {/* Price Pill */}
        <div className="inline-block">
          <span className="bg-[#EAE4DF] text-[#4D342D] text-xs font-bold px-3 py-1 rounded-full">
            {formatRupiah(price)}
          </span>
        </div>

        {/* Pembatasan deskripsi maksimal 2 baris (line-clamp-2) agar tinggi card tetap seragam */}
        <p className="text-xs text-[#8C7A71] mt-2 uppercase tracking-wide leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CatalogCard;