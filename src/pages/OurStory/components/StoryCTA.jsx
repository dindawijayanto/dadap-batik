import { Link } from "react-router-dom";

const StoryCTA = ({ title, description, primaryBtn, secondaryBtn }) => {
  return (
    <section className="bg-gradient-to-br from-[#001020] via-[#001a10] to-[#2a2800] py-20 px-6 text-center flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto flex flex-col gap-6 items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-noto-serif text-[#FAF6F2] leading-tight">
          {title}
        </h2>
        <p className="text-[#FAF6F2]/70 text-sm md:text-base leading-relaxed max-w-lg font-dm-sans">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
          <Link
            to={primaryBtn.link}
            className="px-8 py-3 bg-[#B2993D] text-[#001020] font-semibold text-sm hover:bg-[#c9ae4e] transition-colors"
          >
            {primaryBtn.text}
          </Link>

          <Link
            to={secondaryBtn.link}
            className="px-8 py-3 bg-transparent border border-[#B2993D] text-[#FAF6F2] font-semibold text-sm hover:bg-[#B2993D]/20 transition-colors"
          >
            {secondaryBtn.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StoryCTA;
