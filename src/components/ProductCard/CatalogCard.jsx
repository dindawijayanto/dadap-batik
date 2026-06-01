const CatalogCard = ({ title, price, description, image, onClick }) => {
  // Utility untuk format Rupiah
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div 
      onClick={onClick}
      className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#E6DDD6] cursor-pointer"
    >
      {/* Product Image */}
      <div className="w-full aspect-[4/5] bg-[#E6DDD6] relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-sm md:text-base font-bold text-[#4D342D] tracking-wide uppercase">
          {title}
        </h3>
        
        {/* Price Pill */}
        <div className="inline-block">
          <span className="bg-[#EAE4DF] text-[#4D342D] text-xs font-bold px-3 py-1 rounded-full">
            {formatRupiah(price)}
          </span>
        </div>

        <p className="text-xs text-[#8C7A71] mt-2 uppercase tracking-wide leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CatalogCard;