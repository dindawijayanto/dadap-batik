import { Quote } from "lucide-react";

const StoryQuote = () => {
  return (
    <section className="bg-[#4D342D] py-24 px-6 md:px-16 text-center flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <span className="text-[#A88877] text-6xl font-serif leading-none h-8">
          <Quote />
        </span>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl w-full md:text-4xl lg:text-5xl font-serif text-[#FAF6F2] leading-snug">
            "Batik bukan hanya sekedar kain;
          </h2>
          <span className="w-[120%] text-3xl md:text-4xl lg:text-5xl font-serif text-[#FAF6F2] leading-snug"> batik adalah sebuah doa yang dituliskan dengan malam, sebuah filosofi yang digunakan di tubuh."</span>
        </div>
        <p className="text-[#A88877] text-sm tracking-widest uppercase mt-4 italic">
          — IMAM & YUNI 
        </p>
      </div>
    </section>
  );
};

export default StoryQuote;