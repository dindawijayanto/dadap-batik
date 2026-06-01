/* Section with detailed text, image, and feature cards */
import FeatureCard from "../UI/FeatureCard";

const HeritageSection = ({ photo, establishedText, tagline, headline, bodyText, features, ctaText, ctaLink }) => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Photo side with founders tag */}
        <div className="flex-1 w-full h-[400px] md:h-[500px] lg:h-auto rounded-xl overflow-hidden border border-[#E6DDD6] relative">
          <img src={photo} alt="Workshop Photo" className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 bg-white/70 px-4 py-2 rounded-full border border-[#E6DDD6]">
            <span className="text-xs text-[#A88877]">THE FOUNDERS Imam & Family</span>
          </div>
        </div>
        
        {/* Details side */}
        <div className="flex-1 flex flex-col gap-10 items-start">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-[#A88877] tracking-[2px] uppercase">{establishedText}</span>
            <span className="text-2xl text-[#4D342D]">{tagline}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#4D342D] leading-snug">{headline}</h2>
          
          <div className="space-y-4 text-base text-[#5C4D46]">
            {bodyText.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          {/* Feature Boxes */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
          
          {/* CTA Link - Placeholder link */}
          <a href={ctaLink} className="text-[#A88877] text-sm font-medium hover:text-[#4D342D]">
            {ctaText} →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;