/* Reusable section, flexible image/text positioning */
const AboutSection = ({
  tagline,
  headline,
  bodyText,
  image,
  subtext,
  reverse = false,
}) => {
  return (
    <section
      className={`py-8 pt-16 px-6 md:px-16 lg:px-16 ${reverse ? "bg-[#F2E5DD]" : "bg-[#001020] bg-gradient-to-tl from-[#000000]/40 from-0% to-[#B2993D]/40 to-[88%]"}`}
    >
      <div
        className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-4 lg:gap-0`}
      >
        {/* Image side */}
        <div className="w-full flex p-0">
          {/* Couple Vector Image Placeholder */}
          <img
            src={image}
            alt="About Image"
            className="w-full max-w-lg h-auto"
          />
        </div>

        {/* Text side */}
        <div className="flex flex-col gap-6 text-left justify-center">
          <h4
            className={`text-[16px] font_regular tracking-[3px] uppercase ${reverse ? "text-[#A88877]" : "text-[#FFE6D3] opacity-70"}`}
          >
            {tagline}
          </h4>
          <h2
            className={`text-4xl md:text-5xl font-bold font-serif leading-snug ${reverse ? "text-[#4D342D]" : "text-[#FFE6D3]"}`}
          >
            {headline}
          </h2>
          <div
            className={`space-y-4 text-base ${reverse ? "text-[#5C4D46]" : "text-[#FFE6D3] opacity-90"}`}
          >
            {bodyText.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          {subtext && (
            <p
              className={`text-lg flex flex-row gap-8 font-serif items-center ${reverse ? "text-[#5C4D46]" : "text-[#FFE6D3] opacity-80"}`}
            >
              <div className="w-[60px] h-[2px] bg-[#FFE6D3]"></div>
              {subtext}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
