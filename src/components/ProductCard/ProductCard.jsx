import FeatureCard from "../UI/FeatureCard";

const ProductCard = ({
  title,
  status,
  description,
  image,
  features,
  reverse = false,
}) => {
  return (
    <div
      className={`bg-[#001020] bg-gradient-to-tl from-[#000000]/40 from-0% to-[#B2993D]/40 to-[88%] p-5 rounded-lg border border-[#E6DDD6] flex ${reverse ? "flex-col-reverse" : "flex-col"} gap-5 h-full`}
    >
      <div className="flex flex-col justify-between gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold font-noto-serif text-[#FFE6D3]">
            {title}
          </h3>
          {/* Only show status if it exists, like 'BEST SELLER' */}
          {status && (
            <span className="bg-[#B2993D] text-[#FFE6D3] text-xs py-3 px-4 rounded-full font-dm-sans font-medium whitespace-nowrap">
              {status}
            </span>
          )}
        </div>

        <p className="text-sm text-[#FFE6D3] leading-relaxed line-clamp-3 font-dm-sans">
          {description}
        </p>
      </div>

      <div className="w-full h-80 overflow-hidden relative">
        {/* Product Image Placeholder */}
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      {/* Optional Features like feature boxes */}
      {features && (
        <div className="flex gap-4 mt-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
