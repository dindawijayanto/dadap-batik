import { Link } from "react-router-dom";

const CTA = ({ title, description, primaryBtn, secondaryBtn }) => {
  return (
    <section className="bg-[#3D261D] py-20 px-6 text-center flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        <h2 className="text-4xl md:text-5xl font-serif text-[#FAF6F2]">
          {title}
        </h2>
        <p className="text-[#E6DDD6] text-sm md:text-base leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          {/* Primary Button */}
          <Link 
            to={primaryBtn.link} 
            className="px-8 py-3 bg-[#FAF6F2] text-[#3D261D] font-semibold rounded-md hover:bg-white transition-colors text-sm"
          >
            {primaryBtn.text}
          </Link>
          
          {/* Secondary Button */}
          <Link 
            to={secondaryBtn.link} 
            className="px-8 py-3 bg-transparent border border-[#E6DDD6] text-[#FAF6F2] font-semibold rounded-md hover:bg-[#FAF6F2]/10 transition-colors text-sm"
          >
            {secondaryBtn.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;