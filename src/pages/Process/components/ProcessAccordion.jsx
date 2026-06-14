import { useState } from "react";

import { Brush, Leaf, History } from "lucide-react";

const accordionData = [
  {
    icon: Brush,
    outline: "#FFFFFF",
    color: "#5C3A21",
    title: "Keahlian Pengrajin (45%)",
    content: "Menghargai keterampilan turun-temurun dan upah yang layak bagi pengrajin batik."
  },
  {
    icon: Leaf,
    outline: "#41607F",
    color: "#BBDAFE",
    title: "Bahan Baku Berkelanjutan (30%)",
    content: "Kapas dan sutra pilihan, serta pewarna alami organik."
  },
  {
    icon: History,
    outline: "#50443D",
    color: "#EDE1D2",
    title: "Pelestarian Budaya (25%)",
    content: "Mendokumentasikan motif leluhur dan mendanai pendidikan batik bagi generasi muda"
  }
];

const ProcessAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-noto-serif font-bold text-[#001020] mb-4">Nilai Arsitektur</h2>
        <p className="text-md text-[#001020] font-dm-sans font-regular tracking-wide">Transaparansi penuh di balik setiap angka yang anda bayar.</p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {accordionData.map((item, index) => {
          // <div 
          //   key={index} 
          //   className={`border transition-colors duration-300 ${openIndex === index ? 'border-[#A88877] bg-white shadow-sm' : 'border-[#E6DDD6] bg-transparent'}`}
          // >
          //   <button 
          //     onClick={() => toggleAccordion(index)}
          //     className="w-full flex items-center justify-between p-6 focus:outline-none"
          //   >
          //     <h3 className={`text-base md:text-lg font-serif font-bold ${openIndex === index ? 'text-[#4D342D]' : 'text-[#8C7A71]'}`}>
          //       {item.title}
          //     </h3>
          //     <span className={`text-xl font-light transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-[#4D342D]' : 'text-[#A88877]'}`}>
          //       +
          //     </span>
          //   </button>
            
          //   <div 
          //     className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
          //   >
          //     <div className="p-6 pt-0 text-[#5C4D46] text-sm leading-relaxed">
          //       {item.content}
          //     </div>
          //   </div>
          // </div>
          const IconComponent = item.icon;

          return (
            <div key={index} className="flex gap-4 rounded-sm w-full bg-linear-to-r from-5% to-80% from-[#B2993D] to-[#001020] p-6 text-[#FFE6D3] font-dm-sans">
              <div className={`flex justify-center items-center p-6 bg-[${item.color}]`}>
                <IconComponent size={24}/>
              </div>
              
              <div className="flex flex-col justify-center items-start">
                <h6 className="font-bold ">
                  {item.title}
                </h6>
                <p className="font-light">
                  {item.content}
                </p>
              </div>
            </div>
          )
        })}

        <div className="flex justify-center items-center w-full p-6 md:px-20 lg:px-40 mt-6 rounded-sm border-dashed border-3 border-[#D4C3B950]">
          <p className="text-[#001020] font-dm-sans text-center">
            Saat Anda membeli dari Dadap Batik, Anda bukan sekadar membeli kain, 
            Anda turut menghidupkan warisan budaya yang tak ternilai harganya.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessAccordion;