const TryOnSilhouette = ({ selectedSilhouette, setSelectedSilhouette }) => {
  const silhouettes = [
    { id: "shirt_casual", name: "Casual Shirt", img: "/REPLACE_IMAGE_HERE" },
    { id: "shirt_short", name: "Short Sleeve", img: "/REPLACE_IMAGE_HERE" },
    { id: "blazer", name: "Classic Blazer", img: "/REPLACE_IMAGE_HERE" },
    { id: "dress", name: "Flowing Dress", img: "/REPLACE_IMAGE_HERE" },
  ];

  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#FAF6F2]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-serif text-[#4D342D]">Select Silhouette</h2>
            <p className="text-sm text-[#8C7A71] mt-2">Choose the canvas for your masterpiece.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {silhouettes.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedSilhouette(item.id)}
              className="cursor-pointer group flex flex-col gap-3"
            >
              <div className={`w-full aspect-square bg-[#E6DDD6] overflow-hidden border-2 transition-all duration-300 ${
                selectedSilhouette === item.id ? "border-[#4D342D]" : "border-transparent"
              }`}>
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className={`text-sm font-bold uppercase tracking-wide ${
                selectedSilhouette === item.id ? "text-[#4D342D]" : "text-[#8C7A71]"
              }`}>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TryOnSilhouette;