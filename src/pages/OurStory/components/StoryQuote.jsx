import { Quote } from "lucide-react";

const StoryQuote = () => {
  return (
    <section className="bg-gradient-to-br from-[#B2993D] to-[#001020] py-16 md:py-24 px-6 md:px-12 text-center flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-5">
        <span className="text-[#FAF6F2]/60">
          <Quote size={36} />
        </span>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-noto-serif text-[#FAF6F2] leading-snug">
          "Batik bukan hanya sekadar kain; batik adalah sebuah doa yang
          dituliskan dengan malam, sebuah filosofi yang digunakan di tubuh."
        </h2>

        <p className="text-[#FAF6F2]/60 text-xs tracking-widest uppercase mt-2 font-dm-sans">
          — Imam &amp; Yuni
        </p>
      </div>
    </section>
  );
};

export default StoryQuote;