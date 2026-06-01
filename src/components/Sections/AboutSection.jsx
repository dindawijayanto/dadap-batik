/* Reusable section, flexible image/text positioning */
const AboutSection = ({ tagline, headline, bodyText, image, subtext, reverse = false }) => {
  return (
    <section className={`py-24 px-6 md:px-16 lg:px-24 ${reverse ? 'bg-[#F2E5DD]' : 'bg-[#4D342D]'}`}>
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
        {/* Image side */}
        <div className="flex-1 w-full flex items-center justify-center p-8 lg:p-12">
          {/* Couple Vector Image Placeholder */}
          <img
            src={image}
            alt="About Image"
            className="w-full max-w-sm h-auto"
          />
        </div>
        
        {/* Text side */}
        <div className="flex-1 flex flex-col gap-6 text-left">
          <h4 className={`text-xs font-semibold tracking-[3px] uppercase ${reverse ? 'text-[#A88877]' : 'text-[#FAF6F2] opacity-70'}`}>
            {tagline}
          </h4>
          <h2 className={`text-4xl md:text-5xl font-bold font-serif leading-snug ${reverse ? 'text-[#4D342D]' : 'text-[#FAF6F2]'}`}>
            {headline}
          </h2>
          <div className={`space-y-4 text-base ${reverse ? 'text-[#5C4D46]' : 'text-[#FAF6F2] opacity-90'}`}>
            {bodyText.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          {subtext && (
            <p className={`text-sm italic ${reverse ? 'text-[#5C4D46]' : 'text-[#FAF6F2] opacity-80'}`}>{subtext}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;