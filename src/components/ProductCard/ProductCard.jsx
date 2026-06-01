/* Reusable card for products or batik categories */
import FeatureCard from "../UI/FeatureCard";

const ProductCard = ({ title, status, description, image, features }) => {
  return (
    <div className="bg-white p-5 rounded-lg border border-[#E6DDD6] flex flex-col gap-5 h-full">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-[#4D342D]">{title}</h3>
        {/* Only show status if it exists, like 'BEST SELLER' */}
        {status && (
          <span className="bg-[#F2E5DD] text-[#A38271] text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap">
            {status}
          </span>
        )}
      </div>
      <p className="text-sm text-[#5C4D46] leading-relaxed line-clamp-3">
        {description}
      </p>
      <div className="w-full h-48 rounded-md overflow-hidden relative border border-[#E6DDD6]">
        {/* Product Image Placeholder */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
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