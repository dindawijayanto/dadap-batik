/* Section with detailed text, image, and feature cards */
import FeatureCard from "../UI/FeatureCard";

const HeritageSection = ({
  photo,
  establishedText,
  tagline,
  // headline,
  bodyText,
  features,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
        {/* Photo side with founders tag */}
        <div className="w-full md:w-1/2 h-auto md:h-[500px] lg:h-full rounded-xl border-none border-[#E6DDD6] relative">
          <img
            src={photo}
            alt="Workshop Photo"
            className="w-full md:w-4/5 h-full object-cover justify-center mx-auto"
          />
          <div className="absolute -top-4 left-12 bg-gradient-to-r from-[#B2993D] to-[#001020] px-4 py-2 text-[#FFE6D3]">
            <h4 className="leading-[1.1]">PARA PENDIRI</h4>
            <span className="text-md font-serif">Imam & Yuni</span>
          </div>
        </div>

        {/* Details side */}
        <div className="flex-1 flex flex-col gap-10 items-start">
          <div className="flex flex-col gap-3">
            <span className="text-base px-4 max-w-[227px] rounded-2xl font-semibold text-[#FFE6D3] bg-[#B2993D] py-2 tracking-[2px] uppercase">
              {establishedText}
            </span>
            <span className="text-2xl text-[#001020]">{tagline}</span>
          </div>

          {/* <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#4D342D] leading-snug">{headline}</h2> */}

          <div className="space-y-4 text-base text-[#001020]">
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
          <a
            href={ctaLink}
            className="text-[#001020] text-base font-medium hover:text-[#4D342D] underline uppercase"
          >
            {ctaText} →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
