export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-12">
      <div className="w-full md:w-1/2">
        <p className="text-[#D4AF37] text-sm font-semibold tracking-widest mb-2 uppercase">
          Masa Depan Warisan Leluhur
        </p>
        <h1 className="text-4xl md:text-5xl font-serif text-[#2D241B] leading-tight mb-4">
          Temukan Jati Dirimu Melalui Batik
        </h1>
        <p className="text-[#594A3C] mb-8">
          Kombinasi perpaduan tradisi dan inovasi teknologi. 
          Visualisasikan batik pada proporsi tubuhmu menggunakan AI, eksklusif dari Dadap Batik.
        </p>
      </div>
      
      <div className="w-full md:w-1/2 flex justify-end">
        {/* Arch container layout */}
        <div className="w-full max-w-sm h-[500px] rounded-t-[200px] overflow-hidden shadow-2xl">
          <img 
            src="/hero-image.jpg" 
            alt="Dadap Batik Hero" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}