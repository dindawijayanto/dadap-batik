/* Reusable card for feature lists (e.g., Legal Authenticity) */
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#F2E5DD] p-6 rounded-lg flex flex-col items-start gap-4 flex-1 h-full">
      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-2">
        <img src={icon} alt={`${title} Icon`} className="w-full h-auto" />
      </div>
      <div className="flex flex-col gap-2 flex-grow">
        <h4 className="text-sm font-semibold text-[#4D342D]">{title}</h4>
        <p className="text-xs text-[#5C4D46] leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;