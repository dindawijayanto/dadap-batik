import { useState } from "react";

const accordionData = [
  {
    title: "01. Authenticity in Mind",
    content: "We guarantee that every piece labeled as Batik Tulis is 100% hand-drawn. No shortcuts, no printing machines. Just pure wax and canting."
  },
  {
    title: "02. Cultural Depth",
    content: "Our patterns are not arbitrary. Each motif is carefully selected and drawn to represent deep philosophical meanings of prosperity, protection, and wisdom."
  },
  {
    title: "03. Ethical Production",
    content: "We ensure fair wages and a sustainable working environment for all our artisans, empowering local communities in Central Java."
  }
];

const ProcessAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default buka item pertama

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-[#4D342D] mb-4">The Architecture of Value</h2>
        <p className="text-sm text-[#8C7A71] uppercase tracking-widest">Our commitment to the craft</p>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {accordionData.map((item, index) => (
          <div 
            key={index} 
            className={`border transition-colors duration-300 ${openIndex === index ? 'border-[#A88877] bg-white shadow-sm' : 'border-[#E6DDD6] bg-transparent'}`}
          >
            <button 
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-6 focus:outline-none"
            >
              <h3 className={`text-base md:text-lg font-serif font-bold ${openIndex === index ? 'text-[#4D342D]' : 'text-[#8C7A71]'}`}>
                {item.title}
              </h3>
              <span className={`text-xl font-light transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-[#4D342D]' : 'text-[#A88877]'}`}>
                +
              </span>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-6 pt-0 text-[#5C4D46] text-sm leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessAccordion;