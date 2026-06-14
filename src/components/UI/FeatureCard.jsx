/* Reusable card for feature lists (e.g., Legal Authenticity) */
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gradient-to-r from-[#B2993D] to-[#001020] p-6 rounded-lg flex flex-col items-start gap-4 flex-1 h-full">
      <div className="w-10 h-10 flex">
        <img src={icon} alt={`${title} Icon`} className="w-full h-auto" />
      </div>
      <div className="flex flex-col gap-2 flex-grow">
        <h4 className="text-sm font-noto-serif font-semibold text-[#FFE6D3]">{title}</h4>
        <p className="text-xs text-[#FFE6D3] font-dm-sans leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
