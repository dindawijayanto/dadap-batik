const TryOnMotif = ({ selectedMotif, setSelectedMotif }) => {
  const motifs = [
    { id: "parang", name: "Parang Kusumo", desc: "Nobility & Power", img: "/REPLACE_IMAGE_HERE" },
    { id: "kawung", name: "Kawung Sari", desc: "Purity & Perfection", img: "/REPLACE_IMAGE_HERE" },
    { id: "mega", name: "Mega Mendung", desc: "Patience & Coolness", img: "/REPLACE_IMAGE_HERE" },
    { id: "sekar", name: "Sekar Jagad", desc: "Beauty & Diversity", img: "/REPLACE_IMAGE_HERE" },
  ];

  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-[#4D342D] mb-8">Choose Your Motif</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {motifs.map((motif) => (
            <div 
              key={motif.id}
              onClick={() => setSelectedMotif(motif.id)}
              className="cursor-pointer group flex flex-col gap-3"
            >
              <div className={`w-full aspect-square bg-[#E6DDD6] overflow-hidden border-4 transition-all duration-300 ${
                selectedMotif === motif.id ? "border-[#A88877]" : "border-transparent"
              }`}>
                <img src={motif.img} alt={motif.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#4D342D]">{motif.name}</h4>
                <p className="text-xs text-[#8C7A71]">{motif.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TryOnMotif;